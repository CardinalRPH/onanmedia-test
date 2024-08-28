'use client'
import { FC } from "react";

interface props {
  id: number;
  judul: string;
  gambar: string;
  tag: string[];
}
interface props {}
const TrendCardSide: FC<props> = ({ id, judul, gambar, tag }) => {
  return (
    <div className="flex mb-8">
      <a href="#" className="w-1/2">
        {gambar ? (
          <img
            src={gambar}
            alt={judul}
            className="bg-slate-500 aspect-video object-cover rounded-md"
          />
        ) : (
          <div className="bg-slate-500 aspect-video rounded-md animate-pulse"></div>
        )}
      </a>
      <div className="ml-4 w-1/2">
        <div className="mb-1 flex">
          {tag.map((value, index) => (
            <a href="#" key={index}>
              <h5
                className={`${tag.length - 1 !== index && "border-r"} ${
                  index === 0 ? "pr-3" : "px-3"
                } text-secondaryTextColor font-semibold border-slate-600 hover:underline`}
              >
                {value}
              </h5>
            </a>
          ))}
        </div>
        <a href="#">
          <h4 className="text-xl text-primaryTextColor font-bold my-1 text-wrap">
            {judul}
          </h4>
        </a>
      </div>
    </div>
  );
};
export default TrendCardSide;
