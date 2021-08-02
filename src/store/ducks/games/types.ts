export enum GamesTypes {
  LOAD_REQUEST = "@games/LOAD_REQUEST",
  LOAD_SUCCES = "@games/LOAD_SUCCES",
  LOAD_FAILURE = "@games/LOAD_FAILURE",
}

export interface Game {
  _id: string;
  type: string;
  description: string;
  range: number;
  price: number;
  "max-number": number;
  color: string;
  "min-cart-value": number;
}

export interface Games {
  readonly data: Game[];
  readonly loading: boolean;
  readonly error: boolean;
}

export interface GamesState {
  readonly games: Games;
}
