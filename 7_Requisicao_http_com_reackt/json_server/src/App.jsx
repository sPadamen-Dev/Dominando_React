import { use, useEffect, useState } from "react";
import "./App.css";

import useFetch from "./hooks/useFetch";

function App() {
  const [produtos, setProdutos] = useState([]);
  const url = "http://localhost:3001/Produtos";

  // Resgatando dados do json-server
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     setProdutos(data);
  //   }
  //   fetchData();
  // }, []);

  // Resgatando dados do json-server com custom hook
  const [data, httpConfig, loading] = useFetch(url);

  // Editando dados do json-server
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const produtoAtualizado = {
      nome,
      preco,
    };
    httpConfig(produtoAtualizado, "POST");
    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(produtoAtualizado),
    // });

    // // Carregamento dinamico dos produtos
    // const data = await res.json();
    // setProdutos((prevProdutos) => [...prevProdutos, data]);
    setNome("");
    setPreco("");
  }

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1>🛍️ Produtos em Destaque</h1>
          {loading && <p>Carregando produtos...</p>}
          {!loading && data && <p>Confira nossa seleção</p>}
        </div>

        <div className="produtos-grid">
          {data && data.map((produto) => (
            <div key={produto.id} className="card-produto">
              <div className="produto-image">
                <img
                  src="https://via.placeholder.com/200?text=Produto"
                  alt={produto.nome}
                />
              </div>
              <div className="produto-info">
                <h2 className="produto-nome">{produto.nome}</h2>
                <p className="produto-descricao">Produto de qualidade</p>
                <div className="produto-preco">
                  <span className="preco-label">R$</span>
                  <span className="preco-valor">{produto.preco}</span>
                </div>
                <button className="btn-comprar">Adicionar ao Carrinho</button>
              </div>
            </div>
          ))}
        </div>

        <div className="editando-produto">
          <h2>Criar Produto</h2>
          <form onSubmit={handleSubmit} className="form-editar-produto">
            <label>
              Nome:
              <input
                type="text"
                value={nome}
                name="nome"
                placeholder="Nome do produto"
                onChange={(e) => setNome(e.target.value)}
              />
            </label>
            <label>
              Preço:
              <input
                type="text"
                value={preco}
                name="preco"
                placeholder="R$ 0,00"
                onChange={(e) => setPreco(e.target.value)}
              />
            </label>
            <button type="submit" className="btn-editar-produto">
              Criar Produto
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
