import React from "react";
import { AiFillHome } from "react-icons/ai";
import { SiYoutubeshorts } from "react-icons/si";
import { PiVideoBold } from "react-icons/pi";
import { RiFolderVideoFill } from "react-icons/ri";
import { FaHistory } from "react-icons/fa";
import { RiPlayListAddLine } from "react-icons/ri";
import { MdOutlineSchool } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { BiLike } from "react-icons/bi";

const Sidebar = () => {
  const navLinks = [
    {
      icon: <AiFillHome />,
      name: "Home",
    },
    {
      icon: <SiYoutubeshorts />,
      name: "Shorts",
    },
    {
      icon: <PiVideoBold />,
      name: "Subscriptions",
    },
  ];

  const yourLinks = [
    {
      icon: <FaHistory />,
      name: "History",
    },
    {
      icon:<RiPlayListAddLine />,
      name: "Playlists",
    },
    {
      icon: <RiFolderVideoFill />,
      name: "Your videos",
    },
    {
      icon: <MdOutlineSchool />,
      name: " Your Courses",
    },
    {
      icon: <MdOutlineWatchLater />,
      name: " Watch later",
    },
    {
      icon: <BiLike />,
      name: "  Liked videos",
    },
  ];
  return (
    <div
  className="text-white bg-[#0F0F0F] text-lg px-2 w-[250px] h-screen fixed top-100 left-0"
>
  {/* Home Section */}
  <div className="border-b-2 border-gray-500 flex flex-col gap-2 py-2 px-2">
    {navLinks.map((item) => (
      <div
        key={item.name}
        className="flex gap-4 items-center hover:bg-[#3F3F3F] py-2 px-4 rounded-2xl"
      >
        {item.icon}
        {item.name}
      </div>
    ))}
  </div>

  {/* You Section */}
  <div className="flex gap-2 font-bold items-center hover:bg-[#3F3F3F] py-2 px-4 rounded-2xl mt-2">
    You
  </div>

  {/* Library Section */}
  <div className="border-b-2 border-gray-600 flex flex-col gap-4 py-4 px-2">
    {yourLinks.map((item) => (
      <div
        key={item.name}
        className="flex gap-4 items-center hover:bg-[#3F3F3F] py-2 px-4 rounded-2xl"
      >
        {item.icon}
        {item.name}
      </div>
    ))}
  </div>
</div>

  );
};

export default Sidebar;
