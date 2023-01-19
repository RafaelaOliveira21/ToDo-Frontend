import React from "react";
import * as Styled from "./styles";
import Filter from "../../assets/Filter.png";

function FilterCard({ title, actived }) {
  return (
    <Styled.Container actived={actived}>
      <img src={Filter} alt="Filter" />
      <span>{title}</span>
    </Styled.Container>
  );
}

export default FilterCard;
