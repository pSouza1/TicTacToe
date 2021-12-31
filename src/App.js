import React, { useState, useEffect } from "react";
import Notification from "./components/Notification";
import BoardTable from "./components/BoardTable";
import scoreService from "./services/score";

import "./App.css";

const App = () => {
  const initialState = ["", "", "", "", "", "", "", "", ""];

  const [squares, setSquares] = useState(initialState);
  const [moveCounter, setMoveCounter] = useState(initialState);

  const [nextPlayer, setNextPlayer] = useState("X");
  const [message, setMessage] = useState(null);
  const [classNameStyle, setClassNameStyle] = useState(null);

  const [scoreCounter, setScoreCounter] = useState([0, 0]);
  const [scoreTracker, setScoreTracker] = useState("");


  useEffect(() => {
    console.log("effect");
    const count = [];

    scoreService.getAll().then((initialScore) => {
      console.log(initialScore);
      count[0] = (initialScore.score.match(/X/g) || []).length;
      count[1] = (initialScore.score.match(/O/g) || []).length;
      console.log(count);

      setScoreCounter(count);
      setScoreTracker(initialScore.score);
    });
  }, []);


  const handleClick = (index) => {
    const board = [...squares];
    const counter = [...moveCounter];

    if (board[index] === "" && message === null) {
      board[index] = nextPlayer;
      setSquares(board);

      if (nextPlayer === "X") {
        counter[index] = 1;
        setMoveCounter(counter);
        setNextPlayer("O");
      } else {
        counter[index] = 10;
        setMoveCounter(counter);
        setNextPlayer("X");
      }
    } else {
      alert("ERROR: You can't click in that cell!");
    }
  };


  useEffect(() => {
    console.log(moveCounter);
    const scoreboard = [...scoreCounter];

    if (
      moveCounter[0] + moveCounter[1] + moveCounter[2] === 3 || moveCounter[3] + moveCounter[4] + moveCounter[5] === 3 || moveCounter[6] + moveCounter[7] + moveCounter[8] === 3 ||
      moveCounter[0] + moveCounter[3] + moveCounter[6] === 3 || moveCounter[1] + moveCounter[4] + moveCounter[7] === 3 || moveCounter[2] + moveCounter[5] + moveCounter[8] === 3 ||
      moveCounter[0] + moveCounter[4] + moveCounter[8] === 3 || moveCounter[2] + moveCounter[4] + moveCounter[6] === 3
    ) {
      setMessage("Victory for the X Player!!!");
      setClassNameStyle("xvictory");
      scoreboard[0] = [++scoreboard[0]];
      setScoreCounter(scoreboard);

      const score = scoreTracker.concat("X");
      setScoreTracker(score);

      scoreService.update({ score }).then((updatedScore) => {
        console.log("scoreboard updated in DB: " + updatedScore.score);
      });
    } else if (
      moveCounter[0] + moveCounter[1] + moveCounter[2] === 30 || moveCounter[3] + moveCounter[4] + moveCounter[5] === 30 || moveCounter[6] + moveCounter[7] + moveCounter[8] === 30 ||
      moveCounter[0] + moveCounter[3] + moveCounter[6] === 30 || moveCounter[1] + moveCounter[4] + moveCounter[7] === 30 || moveCounter[2] + moveCounter[5] + moveCounter[8] === 30 ||
      moveCounter[0] + moveCounter[4] + moveCounter[8] === 30 || moveCounter[2] + moveCounter[4] + moveCounter[6] === 30
    ) {
      setMessage("Victory for the O Player!!!");
      setClassNameStyle("ovictory");
      scoreboard[1] = [++scoreboard[1]];
      setScoreCounter(scoreboard);

      const score = scoreTracker.concat("O");
      setScoreTracker(score);

      scoreService.update({ score }).then((updatedScore) => {
        console.log("scoreboard updated in DB: " + updatedScore.score);
      });
    } else if (moveCounter.every((move) => move !== "")) {
      setMessage("That's a tie!");
      setClassNameStyle("tie");
    }
  }, [moveCounter]);


  const handleNotificationButtonClick = () => {
    console.log("play again button clicked");
    setSquares(initialState);
    setMoveCounter(initialState);
    setMessage(null);
  };


  const handleResetButtonClick = () => {
    console.log("reset button clicked");
    setSquares(initialState);
    setMoveCounter(initialState);
    setMessage(null);

    const resetScore = [0, 0];
    setScoreCounter(resetScore);

    const score = "";
    setScoreTracker(score);

    scoreService.update({ score }).then((updatedScore) => {
      console.log("scoreboard updated in DB: " + updatedScore.score);
    });
  };


  return (
    <div>
      <h1>Tic-Tac-Toe</h1>

      <div className="tablePosition">
        <BoardTable nextPlayer={nextPlayer} handleClick={handleClick} squares={squares} scoreCounter={scoreCounter}/>
      </div>

      <Notification message={message} classNameStyle={classNameStyle} handleNotificationButtonClick={handleNotificationButtonClick} scoreTracker={scoreTracker} handleResetButtonClick={handleResetButtonClick}/>
    </div>
  );
};

export default App;
