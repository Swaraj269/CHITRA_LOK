import React, { useState } from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

function Trailer() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const category = pathname.includes("movie") ? "movie" : "tv";

  const video = useSelector((state) => state[category].value.videos);
  return (
    <div className="h-screen flex items-center justify-center w-full bg-[#101010cc] fixed z-[23] top-0 left-0">
      <div
        onClick={() => navigate(-1)}
        className="close cursor-pointer absolute text-white text-5xl right-[5%] top-[8%] "
      >
        <IoMdClose />
      </div>
      <ReactPlayer
        height={500}
        width={1000}
        url={`https://www.youtube.com/watch?v=${video.key}`}
      />
    </div>
  );
}

export default Trailer;
