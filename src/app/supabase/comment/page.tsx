'use client';

import apiRequest, { ApiResponse } from '@/lib/api/apiRequest';
import { useQuery, useQueryClient } from '@tanstack/react-query';

// Comment type
type Comment = {
  id: string;
  created_at: string;
  comment: string;
};

// Fetch comments from the server
const fetchComments = async () => {
  const response = await apiRequest<ApiResponse<Comment[]>>({
    url: '/supabase/comment',
    method: 'GET',
  });

  return response.data;
};

export default function CommentPage() {
  const queryClient = useQueryClient(); // Get the query client

  // Fetch comments
  const { data, error, isLoading, isRefetching } = useQuery({
    queryKey: ['comments'],
    queryFn: fetchComments,
    staleTime: 1000 * 60,
  });

  // Invalidate the query to refetch the data
  const handleInvalidate = () => {
    queryClient.invalidateQueries({ queryKey: ['comments'] });
  };

  return (
    <>
      <code className='bg-gray-100 p-2 rounded text-sm text-gray-700'>
        npm i @tanstack/react-query @tanstack/react-query-devtools
        @supabase/supabase-js
      </code>
      <div>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {isRefetching && <p>Refetching...</p>}
        {!isRefetching && data && (
          <ul>
            {data.map((comment) => (
              <li key={comment.id}>{comment.comment}</li>
            ))}
          </ul>
        )}
        <button onClick={handleInvalidate} className='mt-2 border px-2 py-1 hover:bg-foreground hover:text-background'>Invalidate (refetch)</button>
      </div>
    </>
  );
}
