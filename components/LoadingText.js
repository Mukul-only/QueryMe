const LoadingText = () => {
  return (
    <div className="space-y-2">
      <span className="block loading-text w-[70%] h-4 md:w-1/3 md:h-6 rounded-lg" />
      <span className="block loading-text w-[85%] h-3 md:w-1/2 md:h-4 rounded-lg" />
      <span className="block loading-text w-1/2 h-3 md:w-1/4 md:h-4 rounded-lg" />
      <span className="block loading-text w-1/2 h-3 md:w-1/4 md:h-4 rounded-lg" />
    </div>
  );
};
export default LoadingText;
