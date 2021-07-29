import { action } from "typesafe-actions";
import { GamesTypes, Game } from "./types";

export const loadRequest = () => action(GamesTypes.LOAD_REQUEST);

export const loadSucces = (data: Game[]) =>
  action(GamesTypes.LOAD_SUCCES, { data });

export const loadFailure = () => action(GamesTypes.LOAD_FAILURE);
