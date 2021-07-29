export enum GamesTypes {
  LOAD_REQUEST = "@games/LOAD_REQUEST",
  LOAD_SUCCES = "@games/LOAD_SUCCES",
  LOAD_FAILURE = "@games/LOAD_FAILURE",
}

export interface Game {
  type: string;
  description: string;
  range: number;
  price: number;
  "max-number": number;
  color: string;
  "min-cart-value": number;
}

export interface GamesState {
  readonly data: Game[];
  readonly loading: boolean;
  readonly error: boolean;
}
