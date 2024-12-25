import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { IoLogoInstagram } from "react-icons/io5";
import Loader from "./Loader";
import { MdQueuePlayNext } from "react-icons/md";
import { LiaImdb } from "react-icons/lia";
import { FaWikipediaW } from "react-icons/fa";
import { MdOutlineVideoCameraFront } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import Similarmovie from "./Partials/Similarmovie";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import {
  asyncPeopledetails,
  removePeople,
} from "../store/actions/peopleActions";
import Dropdowm from "./Partials/Dropdowm";

function Peopledetails() {
  const { value } = useSelector((state) => state.people);
  const [category, setCategory] = useState("Movie");
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncPeopledetails(id));
    return () => {
      dispatch(removePeople());
    };
  }, [id, category]);
  var navigate = useNavigate();
  var { pathname } = useLocation();
  return value ? (
    <div className="h-screen overflow-y-auto w-full md:px-2 lg:px-12 bg-[#101010]">
      <div className="nav  h-24 text-white  text-3xl flex gap-20 items-center">
        <div onClick={() => navigate(-1)} className="icons cursor-pointer">
          <BiArrowBack />
        </div>
      </div>
      <div className="mainpart px-12 flex">
        <div className="leftpart h-full w-[25%]">
          <div className="imagediv w-[80%] h-[60%] ">
            <img
              className="h-full w-full object-cover"
              src={`https://image.tmdb.org/t/p/original/${
                value.details.backdrop_path ||
                value.details.poster_path ||
                value.details.profile_path
              }`}
              alt=""
            />
          </div>
          <div className="otherstext  mt-4 flex flex-col gap-6 w-[80%] h-[60%] ">
            <div className="socials flex text-white text-lg lg:text-2xl items-center gap-2 md:gap-4 lg:gap-8">
              <div className="othericons ">
                <a
                  target="_blank"
                  href={`https://en.wikipedia.org/wiki/${value.externalids.wikidata_id}`}
                >
                  <FaWikipediaW />
                </a>
              </div>
              <div className="othericons ">
                <a
                  target="_blank"
                  href={`https://www.facebook.com/${value.externalids.facebook_id}`}
                >
                  <FaFacebookSquare />
                </a>
              </div>
              <div className="othericons ">
                <a
                  target="_blank"
                  href={`https://www.instagram.com/${value.externalids.instagram_id}`}
                >
                  <IoLogoInstagram />
                </a>
              </div>
              <div className="othericons ">
                <a
                  target="_blank"
                  href={`https://x.com/${value.externalids.twitter_id}`}
                >
                  <FaXTwitter />
                </a>
              </div>
            </div>
            <div className="details flex flex-col gap-1 ">
              <div className="heading">
                <h1 className="text-lg lg:text-2xl font-[medium] leading-[1] text-[#73737399]">
                  Known For
                </h1>
              </div>
              <div className="subheading leading-[1] text-white text-md lg:text-lg">
                <h1>{value.details.known_for_department}</h1>
              </div>
            </div>
            <div className="details flex flex-col gap-1 ">
              <div className="heading">
                <h1 className="text-lg lg:text-2xl font-[medium] leading-[1] text-[#73737399]">
                  Birthday
                </h1>
              </div>
              <div className="subheading leading-[1] text-white text-md lg:text-lg">
                <h1>{value.details.birthday}</h1>
              </div>
            </div>
            <div className="details flex flex-col gap-1 ">
              <div className="heading">
                <h1 className="text-lg lg:text-2xl font-[medium] leading-[1] text-[#73737399]">
                  Gender
                </h1>
              </div>
              <div className="subheading leading-[1] text-white text-md lg:text-lg">
                <h1>{value.details.gender === 2 ? "Male" : "Female"}</h1>
              </div>
            </div>
            <div className="details flex flex-col gap-1 ">
              <div className="heading">
                <h1 className="text-lg lg:text-2xl font-[medium] leading-[1] text-[#73737399]">
                  Place of Birth
                </h1>
              </div>
              <div className="subheading leading-[1] text-white text-md lg:text-lg">
                <h1>{value.details.place_of_birth}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="rightpart flex flex-col gap-4 h-full w-[75%]">
          <div className="name">
            <h1 className="text-white text-2xl lg:text-6xl font-[medium]">
              {value.details.name}
            </h1>
          </div>
          <div className="biography">
            <p className="text-[#bfbfbfce] text-md leading-[1.3] ">
              {value.details.biography}
            </p>
          </div>
          <div className="combinedcast -ml-12 ">
            <Similarmovie
              title={value.combinedcredits.cast.media_type}
              data={value.combinedcredits.cast}
            />
          </div>
          <div className="castingbox my-16 h-96 pr-2 overflow-y-auto w-full ">
            <nav className="h-12 flex items-center justify-between w-full">
              <h1 className="text-white text-2xl">{category} Credits</h1>
              <Dropdowm
                options={["Movie", "Tv"]}
                func={(e) => setCategory(e)}
              />
            </nav>
            <div className="cards mt-5 flex flex-col gap-3 ">
              {value[`${category.toLowerCase()}Credits`].cast.map(
                (elem, idx) => {
                  return (
                    <Link
                      to={`/${category.toLowerCase()}/details/${elem.id}`}
                      key={idx}
                      className="card flex md:flex-row flex-col gap-3 md:gap-12 justify-center md:justify-start items-start md:items-center px-4 h-16 bg-[#40404033] cursor-pointer duration-[0.4s] w-full hover:bg-[#23212c] "
                    >
                      <div className="details flex  gap-4 ">
                        <div className="heading">
                          <h1 className="text-lg lg:text-xl font-[medium] leading-[1] text-[#73737399]">
                            {category === "Movie" ? `Movie` : `TV Show`} Name :
                          </h1>
                        </div>
                        <div className="subheading leading-[1] text-white text-md lg:text-lg">
                          <h1>
                            {elem.name ||
                              elem.title ||
                              elem.original_title ||
                              elem.original_name}
                          </h1>
                        </div>
                      </div>
                      <div className="details flex gap-4 ">
                        <div className="heading">
                          <h1 className="text-lg lg:text-xl font-[medium] leading-[1] text-[#73737399]">
                            Character Name :
                          </h1>
                        </div>
                        <div className="subheading leading-[1] text-white text-md lg:text-lg">
                          <h1>{elem.character}</h1>
                        </div>
                      </div>
                    </Link>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
}

export default Peopledetails;
