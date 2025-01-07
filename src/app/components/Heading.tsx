type HeadingProps = {
  text: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
};

const Heading: React.FC<HeadingProps> = ({ text, level, className = '' }) => {
  const defaultClasses = {
    1: 'text-4xl font-bold',
    2: 'text-3xl font-semibold',
    3: 'text-2xl font-medium',
    4: 'text-xl font-medium',
    5: 'text-lg font-medium',
    6: 'text-base font-normal',
  };

  return (
    <>
      {level === 1 && <h1 className={`${defaultClasses[level]} ${className}`}>{text}</h1>}
      {level === 2 && <h2 className={`${defaultClasses[level]} ${className}`}>{text}</h2>}
      {level === 3 && <h3 className={`${defaultClasses[level]} ${className}`}>{text}</h3>}
      {level === 4 && <h4 className={`${defaultClasses[level]} ${className}`}>{text}</h4>}
      {level === 5 && <h5 className={`${defaultClasses[level]} ${className}`}>{text}</h5>}
      {level === 6 && <h6 className={`${defaultClasses[level]} ${className}`}>{text}</h6>}
    </>
  )
};

export default Heading;
