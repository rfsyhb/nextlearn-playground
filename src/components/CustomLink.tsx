type customLinkProps = {
  url: string;
  title: string;
  customClass?: string;
};

const CustomLink: React.FC<customLinkProps> = ({
  url,
  title,
  customClass = '',
}) => {
  return (
    <a
      href={url}
      target='_blank'
      rel='noreferrer'
      className={`${customClass ? customClass : 'text-sm text-blue-400 hover:text-blue-500'} hover:underline`}
    >
      {title}
    </a>
  );
};

export default CustomLink;
