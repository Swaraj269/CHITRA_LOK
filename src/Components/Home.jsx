import React, { useEffect, useState } from "react";
import Sidemenu from "./Partials/Sidemenu";
import Searchbar from "./Partials/Searchbar";
import Headers from "./Partials/Headers";
import axios from "../utils/Axios";
import Loader from "./Loader";

function Home() {
  document.title = "CHITRA_LOK | Homepage";

  var [wallpaper, setWallpaper] = useState("");
  var [trend, setTrend] = useState([]);
  var [op, setOp] = useState("all");

  const getWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      const wall =
        data.results[(Math.random() * data.results.length).toFixed()];
      setWallpaper(wall);
    } catch (error) {
      console.error(error);
    }
  };
  const getTrend = async () => {
    try {
      const { data } = await axios.get(`/trending/${op.toLowerCase()}/day`);
      setTrend(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTrend();
    if (!wallpaper) getWallpaper();
  }, [trend, wallpaper, op]);

  return wallpaper && trend ? (
    <div className="h-screen flex w-full bg-[#101010]">
      <Sidemenu />
      <div className="rightdiv h-full overflow-hidden w-full md:w-[75%] lg:w-[80%] ">
        <Searchbar />
        <Headers
          trend={trend}
          func={(e) => {
            setOp(e);
          }}
          data={wallpaper}
        />
      </div>
    </div>
  ) : (
    <Loader />
  );
}

export default Home;
