import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import axios from "../../utils/Axios";
function Searchbar() {
  const [input, setInput] = useState("");
  const [searches, setSearches] = useState([]);
  const getSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${input}`);
      setSearches(data.results);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getSearches();
  }, [input]);
  return (
    <div className="h-24 flex items-center justify-center w-full">
      <div className="searchbar relative ">
        <div className="searchcontainer bg-[#0d0d0d44] border-2 border-[#bfbfbf] rounded-full px-5 py-1 flex items-center gap-3">
          <div className="searchicon text-white text-xl ">
            <IoSearch />
          </div>
          <input
            onChange={(e) => {
              setInput(e.target.value);
            }}
            value={input}
            placeholder="Search Your Favorites"
            className="h-8 text-[#bfbfbf] py-3 px-2 outline-none bg-transparent shrink-1 border-none w-[40vw] lg:w-[30vw]"
            type="text"
          />
          <div
            onClick={() => setInput("")}
            className={`crossicon ${
              input.length > 0 ? "opacity-[1]" : "opacity-0"
            }  cursor-pointer text-white text-xl`}
          >
            <IoClose />
          </div>
        </div>
        <div
          className={`searchsuggestion ${
            input.length > 0 ? "opacity-[1]" : "opacity-0"
          } absolute z-[20] top-[100%] left-[50%] translate-x-[-50%] bg-[#232323] rounded w-[50vw]  lg:w-[35vw] max-h-80 overflow-y-auto serachsuggestion`}
        >
          {searches.map((elem, idx) => {
            return (
              <Link
                to={`/${elem.media_type}/details/${elem.id}`}
                key={idx}
                className="flex hover:bg-[#59595944] text-[#bfbfbf] hover:text-white duration-[0.5s] border-b-2 border-b-[#bfbfbf25] md:h-20 lg:h-28 px-5 w-full items-center py-3 gap-4"
              >
                <div className="imgdiv h-full w-8 md:w-12 lg:w-16">
                  <img
                    className="h-full w-full object-cover"
                    src={
                      elem.backdrop_path ||
                      elem.profile_path ||
                      elem.poster_path
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
                <div className="nametext">
                  <h1 className=" text-sm md:text-sm lg:text-lg">
                    {elem.name ||
                      elem.original_title ||
                      elem.title ||
                      elem.original_name}
                  </h1>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
