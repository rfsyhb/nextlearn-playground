import Image from 'next/image';

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-mono font-semibold">
      <Image src="https://i.imgur.com/4YLbTtR.jpeg" alt="banner" width={400} height={400} />
      <p>WAASUUUP</p>
      {children}
    </div>
  );
}
