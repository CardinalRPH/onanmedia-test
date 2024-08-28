'use client'
import {
  faBell,
  faHeart,
  faMessage,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ToolBar = () => {
  return (
    <div className="grid grid-cols-2 h-8">
      <div className="border-r border-lineColor flex justify-end items-center px-4">
        <FontAwesomeIcon icon={faMessage} className="h-7 px-4 text-topIconColor hover:text-primaryTextColor hover:cursor-pointer" />
        <FontAwesomeIcon icon={faHeart} className="h-7 px-4 text-topIconColor  hover:text-primaryTextColor hover:cursor-pointer" />
        <FontAwesomeIcon icon={faBell} className="h-7 px-4 text-topIconColor  hover:text-primaryTextColor hover:cursor-pointer" />
      </div>
      <div className="border-lineColor px-4 flex justify-center items-center flex-row hover:cursor-pointer">
        <img src="/api/image/luffy.jpg" alt="profile" className="aspect-square h-8 rounded-full mx-1" />
        <h5 className="mx-1 text-primaryTextColor">Monkey D Luffy</h5>
      </div>
    </div>
  );
};

export default ToolBar;
