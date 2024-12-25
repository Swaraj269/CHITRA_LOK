import React from "react";
import { Link, useParams } from "react-router-dom";
import { HiMiniCalendarDateRange } from "react-icons/hi2";
import { GrMultimedia } from "react-icons/gr";
import { MdOutlineVideoCameraFront } from "react-icons/md";
import HorizontalCards from "./HorizontalCards";

function Headers({ data, trend, func }) {
  return (
    <div className="homediv h-screen overflow-y-auto w-full ">
      <div className="h-[70%] relative w-full">
        <div className="headerimg h-full w-full">
          <img
            className="h-full w-full object-top object-cover"
            src={`https://image.tmdb.org/t/p/original/${
              data.backdrop_path || data.poster_path || data.profile_path
            }`}
            alt=""
          />
        </div>
        <div className="overlayimg p-12 h-full w-full flex items-end absolute top-0 left-0">
          <div className="infopart h-full w-full flex flex-col justify-end ">
            <h1 className="text-white w-[95%] md:w-[80%] lg:w-[40%] leading-[1] text-7xl font-[bold]">
              {data.name ||
                data.original_title ||
                data.title ||
                data.original_name}
            </h1>
            <p className="text-white w-[95%] md:w-[80%] lg:w-[40%] mt-4 text-lg ml-1 leading-[1.2] text-pretty w-[40%]">
              {data.overview.slice(0, 200)}...{" "}
              <Link
                to={`/${data.media_type}/details/${data.id}`}
                className="text-blue-400 cursor-pointer"
              >
                more
              </Link>{" "}
            </p>
            <div className="datesandtype mt-4 flex items-center gap-6">
              <div className="releasedate flex items-center gap-2">
                <div className="icon text-white text-xl">
                  <HiMiniCalendarDateRange />
                </div>
                <h1 className="text-white">{data.release_date || "No Info"}</h1>
              </div>
              <div className="mediatype flex items-center gap-2">
                <div className="icon text-white text-xl">
                  <GrMultimedia />
                </div>
                <h1 className="text-white uppercase ">{data.media_type}</h1>
              </div>
            </div>
            <Link
              to={`/${data.media_type}/details/${data.id}/trailer`}
              className="watchtrailer mt-6 cursor-pointer duration-[0.4s] hover:text-black active:scale-[0.97] hover:bg-[#e8ecff] w-fit bg-[#012fed] rounded px-4 py-3 flex items-center gap-3 text-white"
            >
              <div className="icon text-xl ">
                <MdOutlineVideoCameraFront />
              </div>
              <h1 className="text-nowrap font-[medium] text-md">
                Watch Trailer
              </h1>
            </Link>
          </div>
        </div>
      </div>
      <HorizontalCards trend={trend} func={func} />
    </div>
  );
}

export default Headers;
