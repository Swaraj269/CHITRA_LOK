export { removePeople } from "../reducers/peopleSlice";

import axios from "../../utils/Axios";
import { loadPeople } from "../reducers/peopleSlice";

export const asyncPeopledetails = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/person/${id}`);
    const externalid = await axios.get(`/person/${id}/external_ids`);
    const combinedCredits = await axios.get(`/person/${id}/combined_credits`);
    const movieCredits = await axios.get(`/person/${id}/movie_credits`);
    const tvCredits = await axios.get(`/person/${id}/tv_credits`);
    let wholedetail = {
      details: detail.data,
      externalids: externalid.data,
      combinedcredits: combinedCredits.data,
      movieCredits: movieCredits.data,
      tvCredits: tvCredits.data,
    };
    dispatch(loadPeople(wholedetail));
  } catch (err) {
    console.error(err);
  }
};
