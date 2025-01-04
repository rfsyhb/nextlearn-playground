import SectionWrapper from '../components/SectionWrapper';

export default function SupabaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SectionWrapper>{children}</SectionWrapper>;
}
