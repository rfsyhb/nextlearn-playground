'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

const commentSchema = z.object({
  title: z
    .string()
    .min(4, 'Title at least 4 char')
    .max(20, 'Title max 20 char'),
  content: z
    .string()
    .min(4, 'Content at least 4 char')
    .max(50, 'Content max 50 char'),
});

type CommentFormInputs = z.infer<typeof commentSchema>;

export default function FormWithZod() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CommentFormInputs>({
    resolver: zodResolver(commentSchema),
  });

  const onSubmit: SubmitHandler<CommentFormInputs> = (data) => {
    alert(JSON.stringify(data, null, 2));
    reset();
  };

  return (
    <section className='font-sans flex flex-col gap-4'>
      <code className='bg-gray-100 p-2 rounded text-sm text-gray-700'>
        npm install react-hook-form zod @hookform/resolvers
      </code>

      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2'>
        <div className='flex flex-row gap-2'>
          <label htmlFor='title' className='flex flex-col gap-1 flex-grow'>
            <span>Title</span>
            <input
              id='title'
              type='text'
              placeholder='Enter the title'
              {...register('title')}
              className={`text-background border ${
                errors.title ? 'border-red-500' : 'border-gray-300'
              } rounded px-2 py-1`}
              aria-describedby='title-error'
            />
            {errors.title && (
              <p id='title-error' className='text-red-500'>
                {errors.title.message}
              </p>
            )}
          </label>

          <label htmlFor='content' className='flex flex-col gap-1 flex-grow'>
            <span>Content</span>
            <input
              id='content'
              type='text'
              placeholder='Enter the content'
              {...register('content')}
              className={`text-background border ${
                errors.content ? 'border-red-500' : 'border-gray-300'
              } rounded px-2 py-1`}
              aria-describedby='content-error'
            />
            {errors.content && (
              <p id='content-error' className='text-red-500'>
                {errors.content.message}
              </p>
            )}
          </label>
        </div>

        <div className='flex gap-2'>
          <button
            type='submit'
            className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
          >
            Submit
          </button>
          <button
            type='button'
            onClick={() => reset()}
            className='px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400'
          >
            Reset
          </button>
        </div>
      </form>
    </section>
  );
}
