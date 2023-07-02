const SearchResult = ({ data }) => {
  const title = data?.title;
  const description =
    data?.description?.length > 150
      ? data?.description?.slice(0, 150) + "..."
      : data?.description;
  const url = data?.url;
  const date = data?.datePublished;
  const language = data?.language;
  return (
    <div className="md:max-w-3xl py-6 ">
      <a
        href={url}
        className="text-blue-500 text-lg md:text-xl font-semibold tracking-tight break-words leading-tight"
        target="_blank"
      >
        {title}
      </a>
      <p className="text-gray-500 text-sm font-[400]  md:text-base break-words">
        {description}
      </p>
      <a
        href={url}
        className="text-blue-600 md:text-sm break-words text-xs"
        target="_blank"
      >
        {url}
      </a>
      <p className="text-xs md:text-sm text-gray-400">
        {date} | {language}
      </p>
    </div>
  );
};
export default SearchResult;
