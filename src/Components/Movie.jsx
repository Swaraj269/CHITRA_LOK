import axios from "../utils/Axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import Dropdowm from "./Partials/Dropdowm";
import Searchbar from "./Partials/Searchbar";
import Cards from "./Partials/Cards";
import { BiArrowBack } from "react-icons/bi";
import InfiniteScroll from "react-infinite-scroll-component";
function Movie() {
  document.title = "CHITRA_LOK | Movie";
  const [category, setCategory] = useState("now_playing");
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [hasmore, setHasmore] = useState(true);
  const getMovie = async () => {
    try {
      const { data } = await axios.get(
        `/movie/${category.toLowerCase()}?page=${page}`
      );
      if (data.results.length > 0) {
        setMovie((prev) => [...prev, ...data.results]);
        setPage(page + 1);
      } else {
        setHasmore(false);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const movieHandler = () => {
    if (movie.length === 0) {
      getMovie();
    } else {
      setPage(1);
      setMovie([]);
      getMovie();
    }
  };
  useEffect(() => {
    movieHandler();
  }, [category]);
  const navigate = useNavigate();
  return movie.length > 0 ? (
    <div className="min-h-screen w-full bg-[#101010] px-8 text-white">
      <div className="upperpart h-28 w-full flex items-center justify-between">
        <div className="returndiv flex items-center gap-4">
          <div
            onClick={() => {
              navigate(-1);
            }}
            className="icon cursor-pointer text-2xl"
          >
            <BiArrowBack />
          </div>
          <h1 className="text-4xl font-[medium]">Movie</h1>
        </div>
        <div className="searchbar">
          <Searchbar />
        </div>
        <div className="dropdowns flex gap-6">
          <Dropdowm
            options={["Now_Playing", "Upcoming", "Popular", "Top_Rated"]}
            func={(e) => setCategory(e)}
          />
        </div>
      </div>
      <div className="lowerpart py-8 overflow-y-auto">
        <InfiniteScroll
          dataLength={movie.length}
          next={getMovie}
          hasMore={hasmore}
          loader={<h1 className="text-white text-2xl">Loading....</h1>}
        >
          <Cards data={movie} title={"movie"} />
        </InfiniteScroll>
      </div>
    </div>
  ) : (
    <Loader />
  );
}

export default Movie;
