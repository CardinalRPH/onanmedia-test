'use client'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = ({}) => {
  return (
    <div className="h-10 w-full flex justify-center items-center">
      <input type="text" name="" id="" className="h-8 w-11/12 rounded-l border-2 outline-none px-3" placeholder={`Coba ketikan "Diskusi"`} />
      <button className="h-8 w-11 bg-searcColor flex justify-center items-center rounded-r">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-topIconColor h-6"  />
      </button>
    </div>
  );
};

export default SearchBar;
