import Skeleton from "../Skeleton";
import {
  Container,
  LeftContainer,
  RightContainer,
  ButtonsGameContainer,
  GameName,
  BallsContainer,
} from "../../styles/pages/newbet";

const NewBetSkeletrons = () => {
  return (
    <Container>
      <LeftContainer>
        <GameName>
          <Skeleton width="29%" />
        </GameName>
        <Skeleton width="13%" height="0.7rem" margin="0 0 0.3rem 0" />
        <ButtonsGameContainer>
          <Skeleton
            width="7.1rem"
            height="2.2rem"
            radius="100px"
            margin="0 1rem 0 0"
          />
          <Skeleton
            width="7.1rem"
            height="2.2rem"
            radius="100px"
            margin="0 1rem 0 0"
          />
          <Skeleton
            width="7.1rem"
            height="2.2rem"
            radius="100px"
            margin="0 1rem 0 0"
          />
        </ButtonsGameContainer>
        <Skeleton width="11%" margin="0.6rem 0 0.5rem 0 " height="0.7rem" />
        <div>
          <Skeleton width="94%" height="0.6rem" />
          <Skeleton width="50%" height="0.6rem" margin="0.3rem 0 1rem 0" />
        </div>
        <BallsContainer>
          {Array(25)
            .fill(null)
            .map((i) => (
              <Skeleton
                key={i}
                width="4.3rem"
                height="4.3rem"
                radius="100%"
                margin="0.2rem"
              />
            ))}
        </BallsContainer>
      </LeftContainer>
      <RightContainer></RightContainer>
    </Container>
  );
};

export default NewBetSkeletrons;
