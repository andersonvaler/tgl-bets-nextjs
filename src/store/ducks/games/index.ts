import { Reducer } from "redux";
import { GamesState, GamesTypes } from "./types";

const INNITIAL_STATE: GamesState = {
  games: {
    data: [],
    error: false,
    loading: false,
  },
};

const reducer: Reducer<GamesState> = (state = INNITIAL_STATE, action) => {
  // console.log(state, "state");
  switch (action.type) {
    case GamesTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case GamesTypes.LOAD_SUCCES:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.data,
      };
    case GamesTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true, data: [] };
    default:
      return state;
  }
};

export default reducer;
