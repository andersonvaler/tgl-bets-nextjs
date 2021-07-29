import { Reducer } from "redux";
import { GamesState, GamesTypes } from "./types";

const INNITIAL_STATE: GamesState = {
  data: [
    {
      type: "Lotofácil",
      description:
        "Escolha 15 números para apostar na lotofácil. Você ganha acertando 11, 12, 13, 14 ou 15 números. São muitas chances de ganhar, e agora você joga de onde estiver!",
      range: 25,
      price: 2.5,
      "max-number": 15,
      color: "#7F3992",
      "min-cart-value": 30,
    },
    {
      type: "Mega-Sena",
      description:
        "Escolha 6 números dos 60 disponíveis na mega-sena. Ganhe com 6, 5 ou 4 acertos. São realizados dois sorteios semanais para você apostar e torcer para ficar milionário.",
      range: 60,
      price: 4.5,
      "max-number": 6,
      color: "#01AC66",
      "min-cart-value": 30,
    },
    {
      type: "Quina",
      description:
        "Escolha 5 números dos 80 disponíveis na quina. 5, 4, 3 ou 2 acertos. São seis sorteios semanais e seis chances de ganhar.",
      range: 80,
      price: 2,
      "max-number": 5,
      color: "#F79C31",
      "min-cart-value": 30,
    },
  ],
  error: false,
  loading: false,
};

const reducer: Reducer<GamesState> = (state = INNITIAL_STATE, action) => {
  switch (action.type) {
    case GamesTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case GamesTypes.LOAD_SUCCES:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case GamesTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true, data: [] };
    default:
      return state;
  }
};

export default reducer;
