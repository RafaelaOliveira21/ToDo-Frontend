import React from "react";
import * as Styled from "./styles";
import Filter from "../../assets/Filter.png";

function FilterCard() {
  return (
    <Styled.Container>
      <img src={Filter} alt="Filter" />
      <span>Todos</span>
    </Styled.Container>
  );
}

export default FilterCard;
