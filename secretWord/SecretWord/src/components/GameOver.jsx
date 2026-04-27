import "./GameOver.css";

const GameOver = ({ retry, score }) => {
  return (
    <div>
      <h1>
        Game Over! <br />
      </h1>
      <h2>A sua pontuação é: {score}</h2>
      <button onClick={retry}> Jogar Novamente</button>
    </div>

  )
}

export default GameOver