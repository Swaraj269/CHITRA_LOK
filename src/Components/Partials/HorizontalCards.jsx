import React from "react";
import Dropdowm from "./Dropdowm";
import { Link } from "react-router-dom";

function HorizontalCards({ trend, func }) {
  return (
    <div className="h-[60vh] w-full px-12 ">
      <div className="div py-5 flex item-center justify-between">
        <h1 className="text-white text-4xl font-[medium] ">Trending</h1>
        <Dropdowm
          title={"Filter"}
          func={func}
          options={["All", "Movie", "TV"]}
        />
      </div>
      <div className="cards flex-nowrap pb-6 overflow-x-auto mt-3 flex gap-6">
        {trend.map((elem, idx) => {
          return (
            <Link
              to={`/${elem.media_type}/details/${elem.id}`}
              key={idx}
              className="fullcard w-fit cursor-pointer  shrink-0"
            >
              <div className="card  w-44 rounded h-60  bg-[#321eda] aspect-auto ">
                <img
                  className="h-full opacity-[0.95] w-full object-cover object-center"
                  src={`https://image.tmdb.org/t/p/original/${
                    elem.poster_path || elem.backdrop_path || elem.profile_path
                  }`}
                  alt=""
                />
              </div>
              <h1 className="w-full mt-3 text-white font-[medium] text-md">
                {elem.title ||
                  elem.name ||
                  elem.original_title ||
                  elem.original_name}
              </h1>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default HorizontalCards;
