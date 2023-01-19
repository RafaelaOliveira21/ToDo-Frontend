import React from "react";
import * as Styled from "./styles";
import IconDefault from "../../assets/Outros.png";

function TaskCard() {
  return (
    <Styled.Container>
      <Styled.TopCard>
        <img src={IconDefault} alt="Icone da Tarefa" />
        <h3>Título da Tarefa</h3>
      </Styled.TopCard>

      <Styled.BottomCard>
        <strong>19/01/2023</strong>
        <span>12:45</span>
      </Styled.BottomCard>
    </Styled.Container>
  );
}

export default TaskCard;
