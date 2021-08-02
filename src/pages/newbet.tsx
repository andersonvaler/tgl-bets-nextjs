import ArrowButton from "../components/ArrowButton";
import Header from "../components/Header";
import api from "../services/api";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  LeftContainer,
  RightContainer,
  ButtonsGameContainer,
  GameName,
  Description,
  BallsContainer,
} from "../styles/pages/newbet";
import { useEffect, useState } from "react";
import { GamesState, Game } from "../store/ducks/games/types";
import GameButton from "../components/GameButton";
import NewBetSkeletrons from "../components/NewBetSkeletrons";
import GameBallNumber from "../components/GameBallNumber";

export default function Home() {
  const stateGames = useSelector((state: GamesState) => state.games);
  const games = stateGames.data;
  const isLoading = stateGames.loading;
  const [currentGame, setCurrentGame] = useState<Game>();
  const [numbers, setNumbers] = useState<Number[]>();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "@games/LOAD_REQUEST" });
    api
      .get("/games")
      .then((response) => {
        dispatch({ type: "@games/LOAD_SUCCES", data: response.data });
        setCurrentGame(response.data[0]);
      })
      .catch(() => dispatch({ type: "@games/LOAD_FAILURE" }));
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    let currentNumbers = Array.from(
      { length: currentGame?.range || 25 },
      (x, i) => i + 1
    );
    setNumbers(currentNumbers);
  }, [currentGame]);

  const handleGame = (type: string) => {
    let selected = games.find((game: Game) => game.type === type) || games[0];
    setCurrentGame(selected);

    // console.log(numbers);
  };

  return (
    <>
      <Header />
      {isLoading || !games || games.length === 0 ? (
        <NewBetSkeletrons />
      ) : (
        <>
          <Container>
            <LeftContainer>
              <GameName>
                <strong>NEW BET</strong> FOR {currentGame?.type}
              </GameName>

              <span>Choose a game</span>

              <ButtonsGameContainer>
                {games &&
                  games.map((game: Game, index: number) => {
                    return (
                      <GameButton
                        color={game.color}
                        key={index}
                        handler={() => handleGame(game.type)}
                      >
                        {game.type}
                      </GameButton>
                    );
                  })}
              </ButtonsGameContainer>
              <h3>Fill your bet</h3>
              <Description>{currentGame?.description}</Description>
              <BallsContainer color={currentGame?.color}>
                {numbers?.map((number, index) => (
                  <GameBallNumber key={index}>{number}</GameBallNumber>
                ))}
              </BallsContainer>
            </LeftContainer>
            <RightContainer>
              <ArrowButton green>Save </ArrowButton>
            </RightContainer>
          </Container>
        </>
      )}
    </>
  );
}
