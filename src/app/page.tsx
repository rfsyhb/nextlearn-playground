import Header from '@/components/Header';
import LessonLearned from '@/components/LessonLearned';
import { lessons } from '@/data/lesson';

export default function Home() {
  return (
    <>
      <Header />
      <main className='font-mono flex flex-row gap-2 mt-1 flex-grow overflow-hidden'>
        <section className='font-semibold flex-[1] flex flex-col gap-1 border border-white group'>
          <h1 className='px-2 border-b text-xl group-hover:bg-white group-hover:text-black transition-all duration-500 ease-in-out'>
            {' '}
            Lesson Learned
          </h1>
          <div className='flex-grow overflow-y-auto px-2'>
            <LessonLearned lessons={lessons} />
          </div>
        </section>
        <section className='font-semibold flex-[3] border border-white group'>
          <h1 className='px-2 border-b text-xl group-hover:bg-white group-hover:text-black transition-all duration-500 ease-in-out'>
            Pages
          </h1>
        </section>
      </main>
    </>
  );
}
