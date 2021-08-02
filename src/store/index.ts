import { createStore, applyMiddleware, Store } from "redux";
import { GamesState } from "./ducks/games/types";
import rootReducer from "./ducks/rootReducer";
import thunk from "redux-thunk";

export interface ApplicationState {
  games: GamesState;
}

const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;
