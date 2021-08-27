import {
    FETCH_AGENTS_FAIL,
    FETCH_AGENTS_START,
  FETCH_AGENTS_SUCCESS,
} from "../actions";

const initialState = {
  agents: [],
  error: "",
  isFetching: false,
};

const agentsReducer = (state = initialState, action) => {
  console.log("reducer", action);
  switch (action.type) {
    case FETCH_AGENTS_START:
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    case FETCH_AGENTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        agents: action.payload,
        error: "",
      };
    case FETCH_AGENTS_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default agentsReducer;
