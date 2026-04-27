const CarDetails = ({ brand, model, year }) => {
  return (
    <div>
      <h2>Detalhes do Carro</h2>
      <ul>
        <li>Marca: {brand}</li>
        <li>Modelo: {model}</li>
        <li>Ano: {year}</li>
      </ul>
    </div>
  );
};

export default CarDetails;
