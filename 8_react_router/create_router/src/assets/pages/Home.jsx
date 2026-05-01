import { useEffect, useState } from "react";

function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function buscarProdutos() {
      try {
        const resposta = await fetch("http://localhost:3000/products");
        const dados = await resposta.json();

        setProdutos(dados);
      } catch (erro) {
        console.error("Erro ao buscar produtos:", erro);
      } finally {
        setCarregando(false);
      }
    }

    buscarProdutos();
  }, []);

  if (carregando) return <p>Carregando...</p>;

  return (
    <div>
      <h1>Produtos</h1>

      {produtos.map((produto) => (
        <ul>
          <li key={produto.id}>{produto.name}</li>
          <li key={produto.id}>{produto.description}</li>
          <li key={produto.id}>{produto.price}</li>
        </ul>
      ))}
    </div>
  );
}

export default Produtos;