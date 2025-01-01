import { Lesson } from '@/data/lesson';
import CustomLink from '@/components/CustomLink';

type LessonLearnedProps = {
  lessons: Lesson[];
};

const LessonLearned: React.FC<LessonLearnedProps> = ({ lessons }) => {
  return (
    <div className='font-normal text-base flex flex-col gap-2'>
      {lessons.map((problem, index) => (
        <div key={problem.id} className='flex flex-col'>
          <h2 className='text-lg font-semibold'>
            {index + 1}.&nbsp;
            {problem.title}
          </h2>
          <p className='text-sm'>{problem.description}</p>
          <div className='inline-flex'>
            <CustomLink url={problem.url} title='read docs &#47; solution' />
          </div>
        </div>
      ))}
    </div>
  );
};

export default LessonLearned;
