import styled from "styled-components";

export const Container = styled.div`
  width: 260px;
  height: 60px;
  background: ${props => props.actived ? '#0da1ff' : '#1700c2'};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
  font-family: houschka-rounded, sans-serif;
  font-weight: 700;
  font-style: normal;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
  }

  span {
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    align-self: flex-end;
  }

  &:hover {
    background: #0da1ff;
  }
`;

