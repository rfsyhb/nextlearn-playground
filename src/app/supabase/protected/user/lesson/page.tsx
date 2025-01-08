'use client';

import Heading from '@/app/components/Heading';
import apiRequest, { ApiResponse } from '@/lib/api/apiRequest';
import { zodResolver } from '@hookform/resolvers/zod';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const lessonSchema = z.object({
  title: z.string().min(3, 'Title at least 3 char'),
  lesson: z.string().min(3, 'Lesson at least 3 char'),
});

type LessonFormInputs = z.infer<typeof lessonSchema>;

type Lesson = {
  id: number;
  title: string;
  lesson: string;
  created_at: string;
  user_id: string;
};

const fetchLessons = async () => {
  const response = await apiRequest<ApiResponse<Lesson[]>>({
    url: '/supabase/protected/lesson',
    method: 'GET',
  });

  return response.data;
};

export default function UserLessonPage() {
  const queryClient = useQueryClient();
  
  // Fetch lessons
  const {
    data,
    error: fetchError,
    isLoading,
    isRefetching,
  } = useQuery({
    queryKey: ['lessons'],
    queryFn: fetchLessons,
    staleTime: 1000 * 60,
  });

  // Form handling
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LessonFormInputs>({
    resolver: zodResolver(lessonSchema),
  });

  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: LessonFormInputs) => {
    try {
      const response = await apiRequest<{ status: string; message: string }>({
        url: '/supabase/protected/lesson',
        method: 'POST',
        data,
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(response);

      if (response.status === 'success') {
        reset();
        queryClient.invalidateQueries({ queryKey: ['lessons'] });
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unknown error occurred');
      }
    }
  };

  return (
    <div>
      <section>
        <Heading text='Lesson List' level={3} />
        <div>
          {isLoading && <p>Loading...</p>}
          {fetchError && <p>Error: {fetchError.message}</p>}
          {isRefetching && <p>Refetching...</p>}
          {!isRefetching && data && (
            <ul>
              {data.map((lesson) => (
                <li key={lesson.id}>
                  {lesson.title} - {lesson.lesson}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
      <section>
        <Heading text='Add new Lesson' level={4} />
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2'>
          {error && <p className='text-red-500'>{error}</p>}
          <div className='flex flex-row w-full gap-2 items-start'>
            <label htmlFor='title' className='flex flex-col w-full'>
              <span>Title</span>
              <input
                id='title'
                type='text'
                {...register('title')}
                className={`border text-background ${
                  errors.title ? 'border-red-500' : 'border-gray-300'
                } rounded px-2 py-1`}
              />
              {errors.title && (
                <p className='text-red-500'>{errors.title.message}</p>
              )}
            </label>
            <label htmlFor='lesson' className='flex flex-col w-full'>
              <span>Lesson</span>
              <textarea
                id='lesson'
                {...register('lesson')}
                className={`border text-background ${
                  errors.lesson ? 'border-red-500' : 'border-gray-300'
                } rounded px-2 py-1`}
              />
              {errors.lesson && (
                <p className='text-red-500'>{errors.lesson.message}</p>
              )}
            </label>
          </div>
          <div className='flex gap-2'>
            <button
              type='submit'
              className='border border-foreground px-4 py-1 hover:bg-foreground hover:text-background'
            >
              Add New
            </button>
            <button
              onClick={() => reset()}
              className='border border-foreground px-4 py-1 bg-red-500 hover:bg-red-600'
            >
              Reset
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
