import * as Styled from "./styles";
import api from "../../services/api";
import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TaskCard from "../../components/TaskCard";
import FilterCard from "../../components/FilterCard";

function Home() {
  const [filterActived, setFilterActived] = useState();
  return (
    <Styled.Container>
      <Header />

      <Styled.FilterArea>
        <button type="button" onClick={() => setFilterActived("All")}>
          <FilterCard title="Todos" actived={filterActived === "All"} />
        </button>
        <button type="button" onClick={() => setFilterActived("Today")}>
          <FilterCard title="Hoje" actived={filterActived === "Today"} />
        </button>
        <button type="button" onClick={() => setFilterActived("Week")}>
          <FilterCard title="Semana" actived={filterActived === "Week"} />
        </button>
        <button type="button" onClick={() => setFilterActived("Month")}>
          <FilterCard title="Mês" actived={filterActived === "Month"} />
        </button>
        <button type="button" onClick={() => setFilterActived("Year")}>
          <FilterCard title="Ano" actived={filterActived === "Year"} />
        </button>
      </Styled.FilterArea>

      <Styled.Title>
        <h3>Tarefas</h3>
      </Styled.Title>

      <Styled.Content>
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </Styled.Content>

      <Footer />
    </Styled.Container>
  );
}
export default Home;
