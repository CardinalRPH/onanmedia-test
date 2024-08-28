'use client'
import SearchBar from "./SearchBar";
import ToolBar from "./ToolBar";

const Header = () => {
  return (
    <div className=" w-full h-12 grid grid-cols-6 gap-2">
      <a href="#" className="flex justify-center items-center">
        <img src="/logo1.png" alt="" />
      </a>
      <div className="col-span-3 flex items-center justify-center">
        <SearchBar />
      </div>
      <div className="col-span-2 flex items-center justify-center">
        <ToolBar />
      </div>
    </div>
  );
};
export default Header;
