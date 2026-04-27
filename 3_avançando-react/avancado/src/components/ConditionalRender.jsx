const ConditionalRender = () => {

    const nome = "João";
    return (
    <div>
      <h2>Renderização condicional</h2>
      
        {nome ==='Beatriz' && <p>O nome é Fernando</p>  || <p>O nome é Beatriz</p>}

      {/* // Redenrização condicional é uma técnica em React que permite 
      exibir ou ocultar elementos com base em condições específicas. 
      Isso é útil para criar interfaces dinâmicas e responsivas.
       No exemplo acima, estamos usando um operador ternário para verificar se o nome é "João". Se for, 
      exibimos a mensagem "O nome é João", caso contrário, exibimos "O nome não é João".   */}
      {nome === "João" ? (
        <p>O nome é João</p>
      ) : (
        <p>O nome não é João</p>
      ) }
    </div>
  );
};

export default ConditionalRender;