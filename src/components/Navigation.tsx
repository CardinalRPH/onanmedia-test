'use client'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const navMenu = [
  "Tips",
  "Bisnis",
  "Desain",
  "Teknologi",
  "Media Sosial",
  "Digital Marketing",
  "Penulisan",
  "Gaya Hidup",
];

const Navigation = () => {
  return (
    <div className="border-t-4 border-b-2 border-lineColor grid grid-cols-7 px-4">
      <div className="flex col-span-5 items-center">
        {navMenu.map((value, index) => (
          <a href="#" key={index}>
            <h4
              className={`text-lg text-primaryTextColor text-center my-3 px-3 py-0.5 ${
                index !== navMenu.length - 1 && "border-r"
              } border-lineColor hover:cursor-pointer hover:underline`}
            >
              {value}
            </h4>
          </a>
        ))}
      </div>
      <div className="col-span-2 flex items-center justify-end">
        <input
          type="text"
          className="text-lg rounded outline-none mx-2 placeholder:text-right placeholder:text-primaryTextColor"
          placeholder="Cari"
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="h-6 ml-2 text-primaryTextColor hover:cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Navigation;
