import SectionWrapper from '@/app/components/SectionWrapper';

export default function SupabaseProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <SectionWrapper>
      {children}
    </SectionWrapper>
  );
}
