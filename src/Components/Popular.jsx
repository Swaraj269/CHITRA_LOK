import axios from "../utils/Axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import Dropdowm from "./Partials/Dropdowm";
import Searchbar from "./Partials/Searchbar";
import Cards from "./Partials/Cards";
import { BiArrowBack } from "react-icons/bi";
import InfiniteScroll from "react-infinite-scroll-component";
function Popular() {
  document.title = "CHITRA_LOK | Populars";
  const [category, setCategory] = useState("movie");
  const [popular, setPopular] = useState([]);
  const [page, setPage] = useState(1);
  const [hasmore, setHasmore] = useState(true);
  const getPopular = async () => {
    try {
      const { data } = await axios.get(
        `/${category.toLowerCase()}/popular?page=${page}`
      );
      if (data.results.length > 0) {
        setPopular((prev) => [...prev, ...data.results]);
        setPage(page + 1);
      } else {
        setHasmore(false);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const popularHandler = () => {
    if (popular.length === 0) {
      getPopular();
    } else {
      setPage(1);
      setPopular([]);
      getPopular();
    }
  };
  useEffect(() => {
    popularHandler();
  }, [category]);
  const navigate = useNavigate();
  return popular.length > 0 ? (
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
          <h1 className="lg:text-4xl text-md md:text-xl font-[medium]">
            Popular
          </h1>
        </div>
        <div className="searchbar">
          <Searchbar />
        </div>
        <div className="dropdowns hidden lg:flex gap-6">
          <Dropdowm options={["Movie", "TV"]} func={(e) => setCategory(e)} />
        </div>
      </div>
      <div className="lowerpart py-8 overflow-y-auto">
        <InfiniteScroll
          dataLength={popular.length}
          next={getPopular}
          hasMore={hasmore}
          loader={<h1 className="text-white text-2xl">Loading....</h1>}
        >
          <Cards data={popular} title={category} />
        </InfiniteScroll>
      </div>
    </div>
  ) : (
    <Loader />
  );
}

export default Popular;
