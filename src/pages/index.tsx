import ArrowButton from "../components/ArrowButton";
import FormSignin from "../components/FormSignin";
import Salutation from "../components/Salutation";
import { useSelector } from "react-redux";
import {
  Container,
  LeftContainer,
  RightContainer,
} from "../styles/pages/signin";

export default function Home() {
  // const products = useSelector((state) => console.log(state));
  return (
    <Container>
      <LeftContainer>
        <Salutation />
      </LeftContainer>
      <RightContainer>
        <FormSignin />
        <ArrowButton redirectTo="/signup">Sign Up</ArrowButton>
      </RightContainer>
    </Container>
  );
}
