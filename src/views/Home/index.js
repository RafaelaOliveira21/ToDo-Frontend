import React from "react";
import * as Styled from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FilterCard from "../../components/FilterCard";

function Home() {
  return (
    <Styled.Container>
      <Header /> 
      <FilterCard />
      <Footer />
    </Styled.Container>
  )
}
export default Home;
