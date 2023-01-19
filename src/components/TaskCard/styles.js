import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: houschka-rounded, sans-serif;
  font-weight: 300;
  font-style: normal;
  box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
  flex-direction: column;
  margin: 20px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover {
    opacity: 0.6;
  }
`;

export const TopCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const BottomCard = styled.div`
  width: 140%;
  display: flex;
  justify-content: space-around;

  strong {
    color: #1700c2;
    font-weight: bold;
  }

  span {
    color: #8D8D8D;
    font-weight: bold;
  }
`;
