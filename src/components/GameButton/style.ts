import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  text-align: center;
  width: 7.1rem;
  height: 2.2rem;
  border-radius: 100px;
  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.color};
  font-size: 0.9rem;
  font-weight: 600;
  font-style: italic;
  border: 2px solid ${(props) => props.color};
  outline: none;
  cursor: pointer;
  :hover {
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.color};
  }
`;
