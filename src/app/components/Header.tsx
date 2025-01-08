import Image from 'next/image';
import CustomLink from '@/components/CustomLink';

export default function Header() {
  return (
    <header className='font-mono font-semibold flex flex-col items-center justify-center gap-2'>
      <Image
        src='https://i.imgur.com/4YLbTtR.jpeg'
        alt='banner'
        width={900}
        height={100}
        className='rounded-lg object-cover max-h-[22vh] w-full'
        priority
      />
      <h1 className='text-xl absolute bg-foreground text-background p-4 py-2 rounded-md opacity-80 hover:opacity-100'>
        <CustomLink url='https://github.com/rfsyhb' title="&#64;rfsyhb's" customClass='text-xl text-blue-500 hover:text-blue-600'/>
        &nbsp;playground
      </h1>
    </header>
  );
}
