import { createStore, applyMiddleware, Store } from "redux";
import { GamesState } from "./ducks/games/types";
import rootReducer from "./ducks/rootReducer";

export interface ApplicationState {
  games: GamesState;
}

const store: Store<ApplicationState> = createStore(rootReducer);

export default store;
