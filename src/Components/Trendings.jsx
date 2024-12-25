import React, { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Searchbar from "./Partials/Searchbar";
import Dropdowm from "./Partials/Dropdowm";
import axios from "../utils/Axios";
import Loader from "./Loader";
import Cards from "./Partials/Cards";
import InfiniteScroll from "react-infinite-scroll-component";

function Trendings() {
  document.title = "CHITRA_LOK | Trendings";
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trend, setTrend] = useState([]);
  const [page, setPage] = useState(1);
  const [hasmore, setHasmore] = useState(true);
  const getTrend = async () => {
    try {
      const { data } = await axios.get(
        `/trending/${category.toLowerCase()}/${duration.toLowerCase()}?page=${page}`
      );
      if (data.results.length > 0) {
        setTrend((prev) => [...prev, ...data.results]);
        setPage(page + 1);
      } else {
        setHasmore(false);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const trendHandler = () => {
    if (trend.length === 0) {
      getTrend();
    } else {
      setPage(1);
      setTrend([]);
      getTrend();
    }
  };
  useEffect(() => {
    trendHandler();
  }, [category, duration]);
  const navigate = useNavigate();
  return trend.length > 0 ? (
    <div className="min-h-screen w-full bg-[#101010] px-8 text-white">
      <div className="upperpart h-28 w-full flex items-center justify-between">
        <div className="returndiv flex items-center gap-4">
          <div
            onClick={() => {
              navigate(-1);
            }}
            className="icon cursor-pointer text-md md:text-lg lg:text-2xl"
          >
            <BiArrowBack />
          </div>
          <h1 className="lg:text-4xl text-md md:text-xl font-[medium]">Trending</h1>
        </div>
        <div className="searchbar">
          <Searchbar />
        </div>
        <div className="dropdowns hidden lg:flex gap-6">
          <Dropdowm
            options={["All", "Movie", "TV"]}
            func={(e) => setCategory(e)}
          />
          <Dropdowm options={["Day", "Week"]} func={(e) => setDuration(e)} />
        </div>
      </div>
      <div className="lowerpart py-8 overflow-y-auto">
        <InfiniteScroll
          dataLength={trend.length}
          next={getTrend}
          hasMore={hasmore}
          loader={<h1 className="text-white text-2xl">Loading....</h1>}
        >
          <Cards data={trend} title={category} />
        </InfiniteScroll>
      </div>
    </div>
  ) : (
    <Loader />
  );
}

export default Trendings;
