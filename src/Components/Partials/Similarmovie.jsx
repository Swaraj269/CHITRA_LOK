import React from "react";
import { Link } from "react-router-dom";

function Similarmovie({ data, title }) {
  return (
    <div className=" h-[35vh] w-full px-12 ">
      <div className="cards flex-nowrap  overflow-x-auto mt-3 flex gap-6">
        {data.map((elem, idx) => {
          return (
            <Link
              to={`/${elem.media_type || title}/details/${elem.id}`}
              key={idx}
              className="fullcard w-fit cursor-pointer"
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
              <h1 className="w-full mt-3 text-white font-[medium] lg:text-md">
                {elem.name ||
                  elem.title ||
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

export default Similarmovie;
