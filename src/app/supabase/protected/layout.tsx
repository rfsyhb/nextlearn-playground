import NavigationBar from '@/app/components/NavigationBar';
import SectionWrapper from '@/app/components/SectionWrapper';

export default function SupabaseProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const BASE_LINK = '/supabase/protected/user';
  const links = [
    { href: `${BASE_LINK}`, label: 'user/' },
    { href: `${BASE_LINK}/lesson`, label: 'user/lesson' },
  ];
  return (
    <SectionWrapper>
      <NavigationBar links={links} />
      {children}
    </SectionWrapper>
  );
}
