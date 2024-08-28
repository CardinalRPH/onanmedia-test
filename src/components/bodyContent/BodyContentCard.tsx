"use client";

import { FC } from "react";

interface props {
  id: number;
  judul: string;
  gambar: string;
  tag: string[];
}
const BodyContentCard: FC<props> = ({ id, judul, gambar, tag }) => {
  return (
    <div className="col-span-1">
      <a href="#">
      {gambar ? (
          <img
            src={gambar}
            alt={judul}
            className="bg-slate-500 aspect-[10/7] object-cover rounded-md"
          />
        ) : (
          <div className="bg-slate-500 aspect-[10/7] rounded-md animate-pulse"></div>
        )}
      </a>
      <div className="my-3">
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
          <h4 className="text-lg text-primaryTextColor font-bold">{judul}</h4>
        </a>
      </div>
    </div>
  );
};

export default BodyContentCard;
