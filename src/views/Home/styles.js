import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  font-family: houschka-rounded, sans-serif;
  font-weight: 300;
  font-style: normal;
`;

export const FilterArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  flex-wrap: wrap;

  button {
    background: none;
    border: none;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Title = styled.div`
  width: 100%;
  border-bottom: solid 1px #1700c2;
  margin-bottom: 70px;
  margin-top: -20px;
  display: flex;
  justify-content: center;

  h3 {
    color: #1700c2;
    font-size: 30px;
    position: relative;
    top: 50px;
    background: #fff;
    padding: 0 20px;
  }
`;