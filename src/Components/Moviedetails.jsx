import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { asyncMoviedetails, removeMovie } from "../store/actions/movieActions";
import Loader from "./Loader";
import { MdQueuePlayNext } from "react-icons/md";
import { LiaImdb } from "react-icons/lia";
import { FaWikipediaW } from "react-icons/fa";
import { MdOutlineVideoCameraFront } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";

import Similarmovie from "./Partials/Similarmovie";

function Moviedetails() {
  const { value } = useSelector((state) => state.movie);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncMoviedetails(id));
    return () => {
      dispatch(removeMovie());
    };
  }, [id]);
  var navigate = useNavigate();
  var { pathname } = useLocation();
  return value ? (
    <div className="h-[150vh] w-full relative bg-[#101010]">
      <Outlet />
      <div className="backgroundimg h-full w-full">
        <img
          className="h-full opacity-[0.6] w-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${
            value.details.backdrop_path ||
            value.details.poster_path ||
            value.details.profile_path
          }`}
          alt=""
        />
      </div>
      <div className="overimage h-full w-full px-0 lg:px-12 top-0 left-0 absolute z-[2]">
        <div className="nav px-5  h-24 text-white  text-3xl flex gap-20 items-center">
          <div onClick={() => navigate(-1)} className="icons cursor-pointer">
            <BiArrowBack />
          </div>
          <div className="othericons">
            <a target="_blank" href={value.details.homepage}>
              <MdQueuePlayNext />
            </a>
          </div>
          <div className="othericons">
            <a
              target="_blank"
              href={`https://www.imdb.com/title/${value.externalids.imdb_id}`}
            >
              <LiaImdb />
            </a>
          </div>
          <div className="othericons">
            <a
              target="_blank"
              href={`https://en.wikipedia.org/wiki/${value.externalids.wikidata_id}`}
            >
              <FaWikipediaW />
            </a>
          </div>
        </div>
        <div className="details">
          <div className="upperpart sm:flex-row flex-col flex gap-16 px-12 py-4">
            <div className="imagediv shrink-0 rounded-md h-80 w-52 lg:h-96 lg:w-72 overflow-hidden ">
              <img
                className="h-full w-full object-cover"
                src={`https://image.tmdb.org/t/p/original/${
                  value.details.poster_path ||
                  value.details.backdrop_path ||
                  value.details.profile_path
                }`}
                alt=""
              />
            </div>
            <div className="moviedetails">
              <div className="moviename">
                <h1 className="text-white font-[medium] text-5xl">
                  {value.details.title ||
                    value.details.name ||
                    value.details.original_name ||
                    value.original_title}
                </h1>
              </div>
              <div className="otherdetail text-white text-lg pl-1 mt-2 flex gap-4 ">
                <div className="relasedate">
                  <h1>{value.details.release_date.split("-")[0]}</h1>
                </div>
                <div className="geners">
                  {value.details.genres.map((elem) => elem.name).join(",")}
                </div>
                <div className="runtime">
                  <h1>{value.details.runtime} mins</h1>
                </div>
              </div>
              <div className="titleofmovie pl-1 mt-2">
                <h1 className="text-white text-xl">{value.details.tagline}</h1>
              </div>
              <div className="overview pt-3 text-white">
                <h1 className="text-4xl">Overview :</h1>
                <h1 className="text-xl pt-2 text-pretty w-[95%] lg:w-[80%] leading-[1.2]">
                  {value.details.overview}
                </h1>
              </div>
              <Link
                to={`${pathname}/trailer`}
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
          <div className="lowerpart py-2 px-12">
            <div className="provider flex flex-col gap-2">
              {value.watchproviders &&
                value.watchproviders.flatrate &&
                value.watchproviders.flatrate.length > 0 && (
                  <div className="flex  bg-white rounded-md  py-3 px-5 w-fit items-center gap-6">
                    <div className="title flex   gap-3 items-center text-lg">
                      <h1 className="font-[medium] text-sm">
                        Available In Platforms{" "}
                      </h1>
                    </div>
                    <div className="alltheoptions flex gap-3 ">
                      {value.watchproviders.flatrate.map((elem, idx) => {
                        return (
                          <div key={idx} className="option">
                            <img
                              className="w-5 rounded-md"
                              src={`https://image.tmdb.org/t/p/original/${elem.logo_path}`}
                              alt=""
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              {value.watchproviders &&
                value.watchproviders.buy &&
                value.watchproviders.buy.length > 0 && (
                  <div className="flex  bg-white rounded-md  py-3 px-5 w-fit items-center gap-6">
                    <div className="title flex   gap-3 items-center text-lg">
                      <h1 className=" font-[medium] text-sm">
                        Available to Buy{" "}
                      </h1>
                    </div>
                    <div className="alltheoptions flex gap-3 ">
                      {value.watchproviders.buy.map((elem, idx) => {
                        return (
                          <div key={idx} className="option">
                            <img
                              className="w-5 rounded-md"
                              src={`https://image.tmdb.org/t/p/original/${elem.logo_path}`}
                              alt=""
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              {value.watchproviders &&
                value.watchproviders.rent &&
                value.watchproviders.rent.length > 0 && (
                  <div className="flex  bg-white rounded-md  py-3 px-5 w-fit items-center gap-6">
                    <div className="title flex   gap-3 items-center  text-lg">
                      <h1 className=" font-[medium] text-sm">
                        Available to Rent{" "}
                      </h1>
                    </div>
                    <div className="alltheoptions flex gap-3 ">
                      {value.watchproviders.rent.map((elem, idx) => {
                        return (
                          <div key={idx} className="option">
                            <img
                              className="w-5 rounded-md"
                              src={`https://image.tmdb.org/t/p/original/${elem.logo_path}`}
                              alt=""
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
            </div>
          </div>
          <div className="lowertolower mt-6 ">
            <h1 className="text-white px-12 text-3xl mb-6 ">
              Similar Like This
            </h1>

            <Similarmovie
              title={"movie"}
              data={value.similar || value.recommendations}
            />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
}

export default Moviedetails;
