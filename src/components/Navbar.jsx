import React, { useState } from "react";
import Logo from "./Logo";
import Hamburger from "./Hamburger";
import Search from "./Search";
import { PiMicrophoneFill } from "react-icons/pi";
import { AiOutlinePlus } from "react-icons/ai";
import { GoBell } from "react-icons/go";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm, clearSearch, clearVideos } from "../store/slices/youtubeSlice";
import { getSearchVideos } from "../store/reducers/getSearchVideos";

const Navbar = () => {
  const [isFocused, setIsFocused] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.youtubeApp.searchTerm);

  const handleSearch = (e) => {
    e.preventDefault();
    if (location.pathname !== "/search") navigate("/search");
    else {
      dispatch(clearVideos());
      dispatch(getSearchVideos(false));
    }
  };

  return (
    <div className="flex py-3 justify-between w-full text-white px-4 h-16 items-center bg-[#0F0F0F] fixed top-0 z-50">
      <div className="flex gap-2 items-center text-2xl">
        {/* Hamburger Menu */}
        <div>
          <Hamburger />
        </div>

        {/* Logo */}
        <Link to={'/'}>
          <div onClick={()=>dispatch(clearSearch())}>
          <Logo />
        </div>
        </Link>
        
      </div>

      {/* Search Bar */}
      <div className="flex items-center gap-5">
        <form className="flex items-center" onSubmit={(e) => handleSearch(e)}>
          {/* Search Bar Container */}
          <div
            className={`flex items-center rounded-l-full overflow-hidden  ${
              isFocused
                ? "border border-[#1C62B9]"
                : "border border-r-0 border-gray-600"
            }`}
          >
            {/* Left Search Icon (Appears Only on Focus) */}
            {isFocused && (
              <div className="pl-3">
                <Search />
              </div>
            )}

            {/* Search Input */}
            <input
              className="w-[500px] h-10 px-4 bg-transparent text-white placeholder-gray-500 focus:outline-none"
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => dispatch(changeSearchTerm(e.target.value))}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-zinc-800 rounded-r-full w-16 h-[42px] flex items-center border border-l-0 border-gray-600 justify-center hover:bg-zinc-700"
            >
              <Search />
            </button>
          </div>
        </form>
        <div className="text-xl p-3 bg-zinc-800 rounded-full hover:bg-[#3F3F3F]">
          <PiMicrophoneFill />
        </div>
      </div>

      {/* User Actions */}
      <div className="flex gap-5 items-center pr-4">
        <div
          className="text-base px-4 py-2 flex gap-2 items-center font-[500]
         bg-[#272727] rounded-3xl hover:bg-[#3F3F3F]"
        >
          <div>
            <AiOutlinePlus className="text-xl" />
          </div>
          <div className="text-sm">Create</div>
        </div>
        <div className="relative hover:bg-[#3F3F3F] px-2 py-2 rounded-full">
          <GoBell className="text-2xl" />
          <span className="absolute bottom-5 left-5 text-xs px-1 bg-red-600 rounded-full">
            9+
          </span>
        </div>
        <div>
          <img
            width={30}
            className="rounded-full"
            alt="Profile Logo"
            src="https://yt3.ggpht.com/yti/ANjgQV9tuN0HLiuL30Cz9eHMZVSNrZNtLc9zK6_xway6dNFfOJ0=s108-c-k-c0x00ffffff-no-rj"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
