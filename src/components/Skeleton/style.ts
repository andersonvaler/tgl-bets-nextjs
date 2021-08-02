import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  span {
    background-color: ${(props) => props.theme.grayBorder};
    animation: pulse 1s infinite;
    @keyframes pulse {
      0% {
        filter: opacity(0.7);
      }

      100% {
        filter: opacity(1);
      }
    }
  }
`;
