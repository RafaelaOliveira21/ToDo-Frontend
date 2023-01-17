import styled from "styled-components";
//import { Font } from "../../../style.css"

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background: #d9f4ff;
  display: flex;
  border-bottom: 5px solid #1700c2;
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
  
  a {
    color: #1700C2;
    font-weight: bold;
    text-decoration: none;
    margin: 0 10px;
    font-size: 22px;
  }
`;