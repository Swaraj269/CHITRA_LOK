export { removeTv } from "../reducers/tvSlice";

import axios from "../../utils/Axios";
import { loadTv } from "../reducers/tvSlice";

export const asyncTvdetails = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/tv/${id}`);
    const externalid = await axios.get(`/tv/${id}/external_ids`);
    const recommendations = await axios.get(`/tv/${id}/recommendations`);
    const similar = await axios.get(`/tv/${id}/similar`);
    const videos = await axios.get(`/tv/${id}/videos`);
    const watchproviders = await axios.get(`/tv/${id}/watch/providers`);
    let wholedetail = {
      details: detail.data,
      externalids: externalid.data,
      recommendations: recommendations.data.results,
      similar: similar.data.results,
      videos: videos.data.results.find((m) => m.type === "Trailer"),
      watchproviders: watchproviders.data.results.IN,
    };
    dispatch(loadTv(wholedetail));
  } catch (err) {
    console.error(err);
  }
};
