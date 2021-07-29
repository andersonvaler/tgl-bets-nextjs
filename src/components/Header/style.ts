import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  /* justify-content: space-around; */
  color: ${({ theme }) => theme.mediumTitle};
  height: 4rem;
  width: 100vw;
  border-bottom: 2px solid ${(props) => props.theme.grayLine};
  padding: 0 9rem;
`;

export const Logo = styled.h1`
  font-size: 3.2rem;
  font-weight: 600;
  font-style: italic;
`;

export const Marker = styled.span`
  position: absolute;
  transform: translate(-100%, 670%);
  background-color: ${({ theme }) => theme.greenFluorescent};
  width: 6.5rem;
  height: 0.5rem;
  border-radius: 6px;
`;
