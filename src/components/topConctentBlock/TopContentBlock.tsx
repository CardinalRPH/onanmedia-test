"use client";
import { FC } from "react";
import TrendCardSide from "./TrendCardSide";

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
const TopContentBlock: FC<props> = ({ data }) => {
  const trendContent = data?.find((value) => value.trending === true);
  const nonTrend = data?.filter((value) => value.trending === false).slice(0,3);

  return (
    <div className="mt-10">
      <h3 className="text-2xl font-bold text-primaryTextColor my-3">
        Paling Sering Dibaca
      </h3>
      <div className="flex flex-wrap my-3">
        <div className="w-1/2 pr-5">
          <a href="#">
            {trendContent?.gambar ? (
              <img
                src={trendContent?.gambar}
                alt=""
                className="aspect-[9/8] rounded-md fill object-cover"
              />
            ) : (
              <div className="aspect-[9/8] rounded-md fill object-cover animate-pulse"></div>
            )}
          </a>
          <div className="flex my-1">
            {trendContent?.tag.map((value, index) => (
              <a href="#" key={index}>
                <h5
                  className={`${index !== trendContent.tag.length - 1 && "border-r"} ${
                    index === 0 ? "pr-3" : "px-3"
                  } border-slate-600 text-secondaryTextColor font-semibold hover:underline`}
                >
                  {value}
                </h5>
              </a>
            ))}
          </div>
          <a href="#">
            <h3 className="my-1 text-2xl text-primaryTextColor font-bold">
              {trendContent?.judul}
            </h3>
          </a>
        </div>
        <div className="w-1/2 pl-5">
          {nonTrend?.map((value, index) => (
            <TrendCardSide
              id={value?.id}
              judul={value.judul}
              gambar={value.gambar}
              tag={value.tag}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopContentBlock;
