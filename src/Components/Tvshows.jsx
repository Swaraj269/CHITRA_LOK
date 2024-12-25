import React, { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Searchbar from "./Partials/Searchbar";
import Dropdowm from "./Partials/Dropdowm";
import axios from "../utils/Axios";
import Loader from "./Loader";
import Cards from "./Partials/Cards";
import InfiniteScroll from "react-infinite-scroll-component";

function Tvshows() {
  document.title = "CHITRA_LOK | TV Shows";
  const [category, setCategory] = useState("airing_today");
  const [tv, setTv] = useState([]);
  const [page, setPage] = useState(1);
  const [hasmore, setHasmore] = useState(true);
  const getTv = async () => {
    try {
      const { data } = await axios.get(
        `/tv/${category.toLowerCase()}?page=${page}`
      );
      if (data.results.length > 0) {
        setTv((prev) => [...prev, ...data.results]);
        setPage(page + 1);
      } else {
        setHasmore(false);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const tvHandler = () => {
    if (tv.length === 0) {
      getTv();
    } else {
      setPage(1);
      setTv([]);
      getTv();
    }
  };
  useEffect(() => {
    tvHandler();
  }, [category]);
  const navigate = useNavigate();
  return tv.length > 0 ? (
    <div className="min-h-screen w-full bg-[#101010] px-8 text-white">
      <div className="upperpart h-28 w-full flex items-center justify-between">
        <div className="returndiv flex items-center gap-4">
          <div
            onClick={() => {
              navigate(-1);
            }}
            className="icon cursor-pointer text-md md:text-lg lg:text-2xl "
          >
            <BiArrowBack />
          </div>
          <h1 className="lg:text-4xl text-md md:text-xl font-[medium]">
            {" "}
            Tv Shows{" "}
          </h1>
        </div>
        <div className="searchbar">
          <Searchbar />
        </div>
        <div className="dropdowns hidden lg:flex gap-6">
          <Dropdowm
            options={["Airing_Today", "On_The_Air", "Popular", "Top_Rated"]}
            func={(e) => setCategory(e)}
          />
        </div>
      </div>
      <div className="lowerpart py-8 overflow-y-auto">
        <InfiniteScroll
          dataLength={tv.length}
          next={getTv}
          hasMore={hasmore}
          loader={<h1 className="text-white text-2xl">Loading....</h1>}
        >
          <Cards data={tv} title={"tv"} />
        </InfiniteScroll>
      </div>
    </div>
  ) : (
    <Loader />
  );
}

export default Tvshows;
