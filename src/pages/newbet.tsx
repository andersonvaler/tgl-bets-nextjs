import ArrowButton from "../components/ArrowButton";
import Header from "../components/Header";
import {
  Container,
  LeftContainer,
  RightContainer,
} from "../styles/pages/newbet";

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <LeftContainer></LeftContainer>
        <RightContainer>
          <ArrowButton green>Save </ArrowButton>
        </RightContainer>
      </Container>
    </>
  );
}
