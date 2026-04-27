import { useState } from "react";
import "./App.css";

import UserDeatails from "./components/UserDeatails";

function App() {
  const [pessoas, setPessoas] = useState([
    { nome: "João", idade: 30, profissao: "Engenheiro" },
    { nome: "Maria", idade: 15, profissao: "Designer" },
    { nome: "Pedro", idade: 35, profissao: "Médico" },
    { nome: "Ana", idade: 28, profissao: "Advogada" },
    { nome: "Lucas", idade: 16, profissao: "Programador" },
  ]);

  return (
    <div>
      <h1>Lista de Pessoas</h1>
      <h2>Detalhes das Pessoas</h2>
      <div className="user-details">
        {pessoas.map((pessoa, index) => (
          <UserDeatails
            key={index}
            nome={pessoa.nome}
            idade={pessoa.idade}
            profissao={pessoa.profissao}
          />
        ))}

      </div>
    </div>
  );
}
export default App;
