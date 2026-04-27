import { useState } from "react";


function ManageData() {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <p>O número é: {number}</p>
      <button onClick={() => setNumber(number + 2)}>Adicionar</button>
      <button onClick={() => setNumber(number - 2)}>Subtrair</button>
    </div>
  );
}

export default ManageData;

// O useState é um hook do React que permite criar estados em componentes funcionais. 
// Ele retorna um array com dois elementos: o valor do estado e uma função para 
// atualizar esse valor. No exemplo acima, estamos criando um estado chamado "number"
//  com o valor inicial de 0, e a função "setNumber" para atualizar esse valor. 
// Quando o botão é clicado, a função "setNumber" é chamada com o novo valor, que é o valor atual de "number" mais 1.