import axios from "axios";

export const FETCH_AGENTS_SUCCESS = "FETCH_AGENTS_SUCCESS";
export const FETCH_AGENTS_START = "FETCH_AGENTS_START";
export const FETCH_AGENTS_FAIL = "FETCH_AGENTS_FAIL";

export const fetchAgents = () => (dispatch) => {
  dispatch({ type: FETCH_AGENTS_START });
  axios
    .get("https://randomuser.me/api/?results=12")
    .then((res) =>
      dispatch({ type: FETCH_AGENTS_SUCCESS, payload: res.data.results })
    )
    .catch((err) => dispatch({ type: FETCH_AGENTS_FAIL, payload: err }));
};
