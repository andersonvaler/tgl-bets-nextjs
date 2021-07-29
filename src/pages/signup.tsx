import ArrowButton from "../components/ArrowButton";
import FormSignup from "../components/FormSignup";
import Salutation from "../components/Salutation";
import {
  Container,
  LeftContainer,
  RightContainer,
} from "../styles/pages/signin";

export default function Signup() {
  return (
    <Container>
      <LeftContainer>
        <Salutation />
      </LeftContainer>
      <RightContainer>
        <FormSignup />
        <ArrowButton arrowLeft redirectTo="/">
          Back
        </ArrowButton>
      </RightContainer>
    </Container>
  );
}
