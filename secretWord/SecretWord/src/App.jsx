import reactLogo from "./assets/react.svg";

// css
import "./App.css";

// React Components
import { useCallback, useEffect, useState } from "react";
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

// Dados do jogo
import { wordsList } from "./data/words";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  console.log();

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = () => {
    // Escolher categoria aleatória
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    // Escolher palavra aleatória
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

    return { word, category };
  };

// Função para limpar os estados de letras
  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };  

  // Função para iniciar o jogo
  const startGame = () => {
    // Limpar todas as letras
    clearLetterStates();
    // Escolher palavra e categoria aleatória
    const { word, category } = pickWordAndCategory();

    // Criar um array de letras da palavra
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l) => l.toLowerCase());

    // Definir estados
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  };

  // processamento de escolha de palavra
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();

    // Verificar se a letra já foi utilizada
    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }

    // Adicionar letra correta ou remover uma chance
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]);
      setGuesses((actualGuesses) => actualGuesses - 1);
    }
  };

  useEffect(() => {
    if (guesses <= 0) {
      // Limpar todos os estados
      clearLetterStates();

      setGameStage(stages[2].name);
    }
  }, [guesses]);

  // Checar condição de vitória
  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];

    // Condição de vitória
    if (guessedLetters.length === uniqueLetters.length) {
      // Adicionar pontuação
      setScore((actualScore) => actualScore + 100);

      // Reiniciar jogo com nova palavra
      startGame();
    }
  }, [guessedLetters, letters, startGame]);

  // Restart do jogo
  const retry = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
    setGuesses(3);
    setScore(0);
    setGameStage(stages[0].name);
  };

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && (
        <Game
          verifyLetter={verifyLetter}
          pickedword={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === "end" && <GameOver retry={retry} score={score} />}
    </div>
  );
}

export default App;
