import Image from 'next/image';

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-mono font-semibold">
      <header className='flex flex-col items-center justify-center gap-2'>
        <Image
          src="https://i.imgur.com/4YLbTtR.jpeg"
          alt="banner"
          width={900}
          height={100}
          className='rounded-lg object-cover max-h-[22vh] w-full'
        />
        <p className='text-xl absolute bg-foreground text-background p-4 py-2 rounded-md opacity-80 hover:opacity-100'>&#64;rfsyhb&apos;s playground</p>
      </header>
      {children}
    </div>
  );
}
