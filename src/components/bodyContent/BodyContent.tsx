"use client";
import { FC } from "react";
import BodyContentCard from "./BodyContentCard";
interface Pembaca {
  id: number;
  judul: string;
  gambar: string;
  deskripsi: string;
  tag: string[];
  trending: boolean;
}

interface props {
  data: Pembaca[] | null;
}
const BodyContent: FC<props> = ({ data }) => {
  const nonTrendFilter = data?.filter((value) => value.trending === false)
  const nonTrend = nonTrendFilter?.slice(3,nonTrendFilter.length-1)

  return (
    <>
      <div className="my-10">
        <h2 className="text-2xl font-bold text-primaryTextColor my-3">
          Terbaru
        </h2>
        <div className="grid grid-cols-4 gap-y-5 gap-x-10 my-3">
          {nonTrend?.map((value, index) => (
            <BodyContentCard
              judul={value.judul}
              tag={value.tag}
              gambar={value.gambar}
              key={index}
              id={value.id}
            />
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <span className="text-lg m-2 text-disabledColor">Prev</span>
        <div className="aspect-square flex justify-center items-center h-10 m-2 bg-secondaryColor rounded-md">
          <span className="text-lg text-white">1</span>
        </div>
        <div className="aspect-square flex justify-center items-center h-10 m-2 border-disabledColor border rounded-md hover:cursor-pointer">
          <span className="text-lg text-primaryTextColor">2</span>
        </div>
        <div className="aspect-square flex justify-center items-center h-10 m-2 border-disabledColor border rounded-md hover:cursor-pointer">
          <span className="text-lg text-primaryTextColor">3</span>
        </div>
        <div className="aspect-square flex justify-center items-center h-10 m-2">
          <span className="text-lg text-primaryTextColor">...</span>
        </div>
        <div className="aspect-square flex justify-center items-center h-10 m-2 border-disabledColor border rounded-md hover:cursor-pointer">
          <span className="text-lg text-primaryTextColor">10</span>
        </div>
        <span className="text-lg m-2 text-primaryTextColor hover:cursor-pointer hover:underline">
          Next
        </span>
      </div>
    </>
  );
};

export default BodyContent;
