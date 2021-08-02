import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const RightContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 50%;
`;

export const LeftContainer = styled.section`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  padding-top: 5rem;
  padding-left: 8rem;
  height: 100vh;
  width: 50%;
  span {
    color: ${(props) => props.theme.mediumTitle};
    width: 100%;
    margin-bottom: 0.2rem;
    font-weight: 600;
    font-style: italic;
    font-size: 1rem;
  }
  h3 {
    color: ${(props) => props.theme.mediumTitle};
    width: 100%;
    margin-top: 0.5rem;
    margin-bottom: 0.3rem;
    font-weight: 600;
    font-style: italic;
    font-size: 1rem;
  }
`;

export const GameName = styled.h2`
  width: 100%;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  font-style: italic;
  color: ${(props) => props.theme.mediumTitle};
  letter-spacing: -1.7px;
  strong {
    font-weight: 600;
  }
`;

export const ButtonsGameContainer = styled.nav`
  min-width: 100%;
  height: 2.95rem;
  display: flex;
  align-items: center;
  button,
  span {
    margin-right: 1rem;
  }
`;

export const Description = styled.p`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  font-style: italic;
  color: ${(props) => props.theme.mediumTitle};
  line-height: 1.3rem;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

export const BallsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  button {
    :hover {
      background-color: ${(props) => props.color};
    }
    cursor: pointer;
  }
  .selected {
    background-color: ${(props) => props.color};
  }
`;
