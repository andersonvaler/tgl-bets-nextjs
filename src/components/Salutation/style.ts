import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.mediumTitle};
  height: 23rem;
`;

export const FirstMessage = styled.div`
  width: 18rem;
  height: 12.5rem;
  font-size: 4rem;
  text-align: center;
  font-style: italic;
  font-weight: 600;
`;

export const ForText = styled.span`
  width: 9rem;
  height: 2.45rem;
  border-radius: 100px;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.greenFluorescent};
  font-style: italic;
  font-weight: 600;
  font-size: 1.38rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MajorText = styled.h2`
  font-size: 5.2rem;
  font-style: italic;
  font-weight: 600;
`;
