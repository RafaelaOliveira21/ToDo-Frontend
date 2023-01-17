import React from "react";
import logo from "../../assets/Logo.png";
import * as Styled from "./styles";

function Header() {
  return (
    <Styled.Container>
      <Styled.LeftSide>
        <img src={logo} alt="Logo" />
      </Styled.LeftSide>

      <Styled.RightSide>
        <a href="#"> Início </a>
        <a href="#"> Nova Tarefa </a>
        <a href="#"> Sincronizar Celular </a>
      </Styled.RightSide>
    </Styled.Container>
  )
}

export default Header;
