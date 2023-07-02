import { twMerge } from "tailwind-merge";

const SVG = (props) => {
  return (
    <div
      className={twMerge("relative ", props.className)}
      onClick={props.onClick}
    >
      <props.svg className="w-full h-full" />
    </div>
  );
};
export default SVG;
