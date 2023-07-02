import LoadingText from "@/components/LoadingText";
import SearchBar from "@/components/SearchBar";
import SearchResult from "@/components/SearchResult";
import Card from "@/components/UI/Card";
import Brand from "@/components/svg/Brand";
import Brand_M from "@/components/svg/Brand_M";
import SVG from "@/components/svg/SVG";
import { useState } from "react";
export default function Home() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState();

  return (
    <>
      <div className="border-b border-gray-300">
        <Card className="flex items-center justify-between space-x-4">
          <SVG svg={Brand} className="hidden w-32 md:w-44 md:block" />
          <SVG svg={Brand_M} className="w-5 md:hidden" />
          <SearchBar setLoading={setLoading} setResult={setResult} />
        </Card>
      </div>
      <Card>
        {loading && (
          <div className="space-y-10">
            <LoadingText />
            <LoadingText />
            <LoadingText />
            <LoadingText />
          </div>
        )}
        {result &&
          result.totalCount > 0 &&
          result.value.map((item) => (
            <SearchResult key={item.id} data={item} />
          ))}
        {result && result.totalCount === 0 && (
          <p className="py-12 text-center text-gray-500">No Result Found !</p>
        )}
        {!result && (
          <p className="py-12 text-center text-gray-500">
            QueryMe : Resolve your queries!
          </p>
        )}
      </Card>
    </>
  );
}
