import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import Trendings from "../Components/Trendings";
import Popular from "../Components/Popular";
import Movie from "../Components/Movie";
import Tvshows from "../Components/Tvshows";
import People from "../Components/People";
import Moviedetails from "../Components/Moviedetails";
import Tvdetails from "../Components/Tvdetails";
import Peopledetails from "../Components/Peopledetails";
import Trailer from "../Components/Partials/Trailer";
function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trendings" element={<Trendings />} />
        <Route path="/populars" element={<Popular />} />
        <Route path="/movies" element={<Movie />} />
        <Route path="/movie/details/:id" element={<Moviedetails />}>
          <Route path="/movie/details/:id/trailer" element={<Trailer />} />
        </Route>
        <Route path="/tv/details/:id" element={<Tvdetails />}>
          <Route path="/tv/details/:id/trailer" element={<Trailer />} />{" "}
        </Route>
        <Route path="/people/details/:id" element={<Peopledetails />} />
        <Route path="/tvshows" element={<Tvshows />} />
        <Route path="/people" element={<People />} />
      </Routes>
    </div>
  );
}

export default Routing;
