import { useRef, useState } from "react";
import SVG from "./svg/SVG";
import Search from "./svg/Search";
import fetchSearchResults from "@/ApiCalls/fetchSearchResults";

const SearchBar = (props) => {
  const [input, setInput] = useState("");
  const [focus, setFocus] = useState(false);

  const inputRef = useRef();
  const inputChangeHandler = (e) => {
    setInput(e.target.value);
  };
  const submitHandler = () => {
    if (input.trim().length > 0) {
      props.setLoading(true);
      fetchSearchResults(input).then((e) => {
        props.setResult(e);
        props.setLoading(false);
        inputRef.current.blur();
      });
    }
  };

  return (
    <div
      className={`flex-1 w-0 md:flex-none flex px-4 gap-1 rounded-full border-2 ${
        focus ? "border-blue-500" : "border-gray-300"
      }  md:w-[600px] `}
    >
      <input
        ref={inputRef}
        type="text"
        value={input}
        placeholder="search your query"
        className="flex-1 w-0 py-1 outline-none text-sm md:text-base"
        onChange={inputChangeHandler}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onKeyDown={(e) => {
          if (e.code === "Enter") submitHandler();
        }}
      />
      <SVG
        svg={Search}
        className="w-5 stroke-gray-500 fill-white cursor-pointer hover:stroke-gray-700"
        onClick={submitHandler}
      />
    </div>
  );
};
export default SearchBar;
