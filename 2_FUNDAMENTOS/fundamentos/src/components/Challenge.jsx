const challenge = () => {
  const a = 10;
  const b = 20;
  return (
    <div>
      <p className="distancia">A: {a}</p>
      <p className="distancia">B: {b}</p>

      <div className="resultadoDaSona">
        <h1 id="resultado"></h1>
      </div>

      <button
        className="btn"
        onClick={() => {
          const resultado = b + a;
          document.getElementById("resultado").textContent =
            `RESULTADO:` + ` A e B é ${resultado}`;
        }}
      >
        Soma A mais B
      </button>

      <button
        className="btn"
        onClick={() => {
          document.getElementById("resultado").textContent = "";
        }}
      >
        Limpa soma
      </button>
    </div>
  );
};

export default challenge;
