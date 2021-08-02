import styled from "styled-components";

export const Ball = styled.div`
  button {
    width: 4.3rem;
    height: 4.3rem;
    background-color: ${(props) => props.theme.lightGray};
    color: ${(props) => props.theme.white};
    font-size: 1.2rem;
    font-weight: 600;
    border-radius: 100%;
    border: none;
    margin: 0.2rem;
  }
`;
