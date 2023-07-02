const { twMerge } = require("tailwind-merge");

const Card = (props) => {
  return (
    <div className={twMerge("max-w-7xl mx-auto py-3 px-3", props.className)}>
      {props.children}
    </div>
  );
};
export default Card;
