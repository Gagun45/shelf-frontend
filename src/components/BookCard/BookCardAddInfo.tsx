const BookCardAddInfo = ({
  author,
  language,
  publishYear,
}: {
  author: string;
  language: string;
  publishYear: number;
}) => {
  return (
    <>
      <span className="w-full text-sm italic line-clamp-2 break-words">{author}</span>
      <span className="italic text-xs line-clamp-2">
        {language}, {publishYear}
      </span>
    </>
  );
};
export default BookCardAddInfo;
