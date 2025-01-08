'use client';

import apiRequest from '@/lib/api/apiRequest';
import { zodResolver } from '@hookform/resolvers/zod';
import { User } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, 'Password at least 8 char'),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      const response = await apiRequest<User>({
        url: '/supabase/auth/login',
        method: 'POST',
        data,
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(response);
      router.push('/supabase/protected/admin');
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unknown error occurred');
      }
    }
  };

  // Handling Logout
  const onLogout = async () => {
    try {
      const response = await apiRequest({
        url: '/supabase/auth/logout',
        method: 'POST',
      });

      console.log(response);
      router.push('/supabase/auth/login');
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unknown error occurred');
      }
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2'>
        {error && <p className='text-red-500'>{error}</p>}
        <div className='flex flex-row w-full gap-2'>
          <label htmlFor='email' className='flex flex-col w-full'>
            <span>Email</span>
            <input
              id='email'
              type='email'
              placeholder='enter your email'
              {...register('email')}
              className={`border text-background ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } rounded px-2 py-1`}
              aria-describedby='email-error'
            />
            {errors.email && (
              <p id='email-error' className='text-red-500'>
                {errors.email.message}
              </p>
            )}
          </label>
          <label htmlFor='password' className='flex flex-col w-full'>
            <span>Password</span>
            <input
              id='password'
              type='password'
              placeholder='enter your password'
              {...register('password')}
              className={`border text-background ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              } rounded px-2 py-1`}
              aria-describedby='password-error'
            />
            {errors.password && (
              <p id='password-error' className='text-red-500'>
                {errors.password.message}
              </p>
            )}
          </label>
        </div>
        <div className='flex gap-2'>
          <button
            type='submit'
            className='border border-foreground px-4 py-1 hover:bg-foreground hover:text-background'
          >
            Login
          </button>
          <button
            onClick={() => reset()}
            className='border border-foreground px-4 py-1 bg-red-500 hover:bg-red-600'
          >
            Reset
          </button>
          <button
            onClick={onLogout}
            className='border border-foreground px-4 py-1 bg-red-700 hover:bg-red-800'
          >Logout</button>
        </div>
      </form>
    </>
  );
}
