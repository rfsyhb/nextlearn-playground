'use client'

import { useSearchParams } from 'next/navigation';
import SectionWrapper from '../components/SectionWrapper';
import { useEffect } from 'react';

export default function SupabaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');

  useEffect(() => {
    if (error) {
      alert('Error: ' + error);
    }
  }, [error]);

  return <SectionWrapper>{children}</SectionWrapper>;
}
