import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";
import ShowUseName from "./components/ShowUseName";
import CarDetails from "./components/CarDetails";
import Container from "./components/Container";
import ShowFunction from "./components/ShowFunction";

import "./App.css";

function App() {
  const [name, setName] = useState("Maria da Silva");
  const cars = [
    { id: 1, brand: "Toyota", model: "Corolla", year: 2020 },
    { id: 2, brand: "Honda", model: "Civic", year: 2019 },
    { id: 3, brand: "Ford", model: "Mustang", year: 2021 },
  ];

  const showMessage = () => {
    console.log("Evento do componente pai");
  };

  return (
    <div>
      <h2>Avançando em react</h2>
      <div>
        <ManageData />
        <ListRender />
      </div>
      <div>
        <ConditionalRender />
      </div>
      <ShowUseName name={name} />
      {/* Reaproveitamento  */}
      <CarDetails brand="Toyota" model="Corolla" year={2020} />

      {/* loop em array de carros */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          model={car.model}
          year={car.year}
        />
      ))}


      <Container>
        <p>Este é o conteúdo do parágrafo</p>
      </Container>
      <ShowFunction showMessage={showMessage} />
      


    </div>

    // useState é um hook do react que permite criar estados em componentes fu
    // ncionais. Ele retorna um array com dois elementos: o valor do estado e uma
    // função para atualizar esse valor. No exemplo acima, estamos criando um
    // estado chamado "count" com o valor inicial de 0, e a função "setCount"
    // para atualizar esse valor.
  );
}

export default App;
