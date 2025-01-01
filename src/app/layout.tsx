import type { Metadata } from 'next';
import { JetBrains_Mono, Poppins } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import LessonLearned from './components/LessonLearned';
import { lessons } from '@/data/lesson';
import NavigationBar from './components/NavigationBar';

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
});

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'learn by doing',
  description: 'playground to learn and experiment',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${poppins.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Header />
        <main className='font-mono flex flex-row gap-2 mt-1 flex-grow overflow-hidden'>
          {/* Lesson Learned Section */}
          <section className='font-semibold flex-shrink-0 flex-grow-0 basis-1/4 border flex flex-col border-white group'>
            <h1 className='px-2 border-b text-xl group-hover:bg-white group-hover:text-black transition-all duration-500 ease-in-out'>
              {' '}
              Lesson Learned
            </h1>
            <div className='flex-grow overflow-y-auto px-2'>
              <LessonLearned lessons={lessons} />
            </div>
          </section>
          {/* Pages Section */}
          <section className='font-semibold flex-grow basis-3/4 border border-white group flex flex-col overflow-hidden'>
            <h1 className='px-2 border-b text-xl group-hover:bg-white group-hover:text-black transition-all duration-500 ease-in-out'>
              Pages
            </h1>
            <div className='font-normal flex flex-col flex-grow'>
              <NavigationBar />
              <div className='h-full flex bg-playground pb-2 px-2'>
                {children}
              </div>
            </div>
          </section>
        </main>
      </body>
    </html>
  );
}
