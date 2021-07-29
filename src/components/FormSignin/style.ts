import styled from "styled-components";

export const Container = styled.div`
  form {
    min-width: 23rem;
    min-height: 21.1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    color: inherit;
    background-color: ${({ theme }) => theme.white};
    align-items: center;
    color: ${({ theme }) => theme.mediumTitle};
    border: 1px solid ${({ theme }) => theme.grayBorder};
    box-shadow: 1px 1px 30px 1px ${({ theme }) => theme.darkShadow};
    border-radius: 14px;
    overflow: hidden;
    box-sizing: border-box;
  }

  input {
    border: none;
    background-color: transparent;
    padding: 2.3rem 1rem 1.5rem 2rem;
    border-bottom: 2px solid ${({ theme }) => theme.grayLine};
    width: 92%;
    outline: none;
    color: inherit;
    font-size: 1rem;
    font-style: italic;
    font-weight: 600;
  }
  div {
    width: 100%;
    span {
      position: absolute;
      transform: translate(14%, -130%);
      width: 18rem;
      text-align: center;
      font-size: 0.75rem;
      color: red;
      font-weight: 500;
    }
  }
`;

export const Title = styled.h2`
  font-size: 2.2rem;
  color: ${({ theme }) => theme.mediumTitle};
  font-weight: 600;
  font-style: italic;
  margin-bottom: 1.8rem;
  text-align: center;
`;

export const ForgetPassword = styled.span`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.highlightText};
  font-style: italic;
  text-align: right;
  width: 80%;
  padding: 1.8rem 1.8rem 0 1.8rem;
  letter-spacing: -0.5px;
  cursor: pointer;
`;
