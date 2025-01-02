export default function SectionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className='font-sans flex flex-col gap-4 h-full justify-center w-full'>
      {children}
    </section>
  );
}
