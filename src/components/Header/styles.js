import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background: #d9f4ff;
  display: flex;
  border-bottom: 5px solid #1700c2;
  font-family: houschka-rounded, sans-serif;
  font-weight: 700;
  font-style: normal;
`;

export const LeftSide = styled.div`
  width: 50%;
  height: 70%;
  display: flex;

  img {
    width: 100px;
    height: 50px;
    margin-left: 40px;
    margin-top: 10px;
  }
`;

export const RightSide = styled.div`
  width: 50%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  a {
    color: #1700c2;
    font-weight: bold;
    text-decoration: none;
    margin: 0 10px;
    font-size: 22px;
    margin-top: 20px;

    &:hover {
      color: #408cff;
    }
  }

  #notification {
    img {
      width: 24px;
      height: 30px;
      margin-top: 7px;
    }

    span {
      background: #ffffff;
      color: #1700c2;
      padding: 3px 7px;
      border-radius: 50%;
      position: relative;
      top: -20px;
      right: 10px;
    }

    &:hover {
      opacity: 0.5;
    }
  }

  .division {
    width: 2px;
    height: 15px;
    background: #1700c2;
    margin: 5px;
    margin-top: 25px;
  }
`;