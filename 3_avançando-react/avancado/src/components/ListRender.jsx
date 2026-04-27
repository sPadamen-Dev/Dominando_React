import React, { useState } from 'react'

const ListRender = () => {
    const [list, setList] = React.useState(["Matheus", "João", "Maria", "Pedro"]);

    function adicionarNome(){
        const input = document.getElementById("nome");
        const nome = input.value;
        setList([...list, nome]);
        input.value = "";
    };

  return (
    <div>
        <ul>
            {list.map((item, i)=>(
                <li key={i}>{item} </li>
            ))}
        </ul>

        <input type="text" id='nome'/>
        <button onClick={ adicionarNome}>Adicionar Nome</button>


    </div>

  )
}

export default ListRender