import React from "react";
import { Link } from "react-router-dom";

function Cards({ data, title }) {
  return (
    <div className="flex flex-wrap   justify-center pb-12  cursor-pointer gap-10">
      {data.map((elem, idx) => {
        return (
          <Link
            to={`/${elem.media_type || title}/details/${elem.id}`}
            key={idx}
            className="card duration-[0.4s] text-[#bfbfbf] hover:bg-[#40404090] hover:text-white  shrink-0 rounded-md overflow-hidden h-72 w-48 bg-[#262626] "
          >
            {elem.overview ? (
              <div className="cardupper h-[60%] w-full bg-[ #012fed ]">
                <img
                  className="h-full w-full object-cover object-top"
                  src={`https://image.tmdb.org/t/p/original/${
                    elem.poster_path || elem.backdrop_path || elem.profile_path
                  }`}
                  alt=""
                />
              </div>
            ) : (
              <div className="cardupper h-[85%] w-full bg-[ #012fed ]">
                <img
                  className="h-full w-full object-cover object-top"
                  src={
                    elem.backdrop_path || elem.profile_path || elem.poster_path
                      ? `https://image.tmdb.org/t/p/original/${
                          elem.poster_path ||
                          elem.backdrop_path ||
                          elem.profile_path
                        }`
                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXAAu00LEWfFtSxMSYhBiQoHX_PCz6af43TTi83nFT-EFzKHl9wamq09mF0ys8ifZ75Kg&usqp=CAU"
                  }
                  alt=""
                />
              </div>
            )}
            <div className="cardlower px-2 py-2">
              <h1 className="text-xl leading-[1.1] font-[medium]">
                {elem.title ||
                  elem.name ||
                  elem.original_title ||
                  elem.original_name}
              </h1>
              {elem.overview && (
                <p className="text-xs mt-2">
                  {elem.overview.slice(0, 70)}...{" "}
                  <Link className="text-blue-400 cursor-pointer">more</Link>{" "}
                </p>
              )}
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Cards;
