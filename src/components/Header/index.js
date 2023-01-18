import React from "react";
import logo from "../../assets/Logo.png";
import sino from "../../assets/Sino.png";
import * as Styled from "./styles";

function Header() {
  return (
    <Styled.Container>
      <Styled.LeftSide>
        <img src={logo} alt="Logo" />
      </Styled.LeftSide>

      <Styled.RightSide>
        <a href="#"> Início </a>
        <span className="division" />
        <a href="#"> Nova Tarefa </a>
        <span className="division" />
        <a href="#"> Sincronizar Celular </a>
        <span className="division" />
        <a href="#" id="notification">
          <img src={sino} alt="Notificação" />
          <span> 3 </span>
        </a>
      </Styled.RightSide>
    </Styled.Container>
  );
}

export default Header;
