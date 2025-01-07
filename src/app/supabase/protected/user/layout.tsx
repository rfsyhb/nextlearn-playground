import SectionWrapper from "@/app/components/SectionWrapper";

export default function SupabaseUserLayout({
  children,
}: {
  children: React.ReactNode;
  }) {
  return (
    <SectionWrapper>
      {children}
    </SectionWrapper>
  )
}
