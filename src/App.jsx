import React from "react";
import { Route, Routes,useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Watch from "./pages/Watch";

const App = () => {
  
  return (

    <div className="flex flex-col min-h-screen bg-[#0F0F0F] text-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Content with Sidebar */}
      <div className="flex mt-16 min-h-screen" >
      <Sidebar className="hidden lg:block" />
        <div className="flex justify-center items-center w-full ml-[250px]  bg-[#0F0F0F]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/watch/:id" element={<Watch />} />
            <Route path="*" element={<div className="text-center text-2xl">404 - Page Not Found</div>} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
