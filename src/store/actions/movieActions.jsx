export { removeMovie } from "../reducers/movieSlice";

import axios from "../../utils/Axios";
import { loadMovie } from "../reducers/movieSlice";

export const asyncMoviedetails = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/movie/${id}`);
    const externalid = await axios.get(`/movie/${id}/external_ids`);
    const recommendations = await axios.get(`/movie/${id}/recommendations`);
    const similar = await axios.get(`/movie/${id}/similar`);
    const videos = await axios.get(`/movie/${id}/videos`);
    const watchproviders = await axios.get(`/movie/${id}/watch/providers`);
    let wholedetail = {
      details: detail.data,
      externalids: externalid.data,
      recommendations: recommendations.data.results,
      similar: similar.data.results,
      videos: videos.data.results.find((m) => m.type === "Trailer"),
      watchproviders: watchproviders.data.results.IN,
    };
    dispatch(loadMovie(wholedetail));
  } catch (err) {
    console.error(err);
  }
};
