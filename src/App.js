import React, { useState , useEffect } from "react";
import Notification from "./components/Notification";
import "./App.css";

const App = () => {
  const initialState = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

  const [squares, setSquares] = useState(initialState);
  const [moveCounter, setMoveCounter] = useState(initialState);

  const [nextPlayer, setNextPlayer] = useState("X");
  const [message, setMessage] = useState(null);
  const [classNameStyle, setClassNameStyle] = useState(null)

  const [scoreCounter, setScoreCounter] = useState([0,0])


  const handleClick = (index) => {
    const board = [...squares];
    const counter = [...moveCounter]

    if (board[index]===" " && message===null) {
      board[index] = nextPlayer
      setSquares(board);

      if (nextPlayer === "X") {
        counter[index]=1
        setMoveCounter(counter)
        setNextPlayer("O");
        }else{
        counter[index]=10
        setMoveCounter(counter)
        setNextPlayer("X");
      }

    }else{
      alert("ERROR: You can't click in that cell!")
    };
  };

  useEffect(() => {
    console.log(moveCounter)
    const scoreboard = [...scoreCounter]

    if(moveCounter[0]+moveCounter[1]+moveCounter[2]===3 || moveCounter[3]+moveCounter[4]+moveCounter[5]===3 || moveCounter[6]+moveCounter[7]+moveCounter[8]===3 ||
       moveCounter[0]+moveCounter[3]+moveCounter[6]===3 || moveCounter[1]+moveCounter[4]+moveCounter[7]===3 || moveCounter[2]+moveCounter[5]+moveCounter[8]===3 ||
       moveCounter[0]+moveCounter[4]+moveCounter[8]===3 || moveCounter[2]+moveCounter[4]+moveCounter[6]===3){
      setMessage("Victory for the X Player!!!")
      setClassNameStyle("xvictory")
      scoreboard[0]=[++scoreboard[0]]
      setScoreCounter(scoreboard)
    }

    else if(moveCounter[0]+moveCounter[1]+moveCounter[2]===30 || moveCounter[3]+moveCounter[4]+moveCounter[5]===30 || moveCounter[6]+moveCounter[7]+moveCounter[8]===30 ||
      moveCounter[0]+moveCounter[3]+moveCounter[6]===30 || moveCounter[1]+moveCounter[4]+moveCounter[7]===30 || moveCounter[2]+moveCounter[5]+moveCounter[8]===30 ||
      moveCounter[0]+moveCounter[4]+moveCounter[8]===30 || moveCounter[2]+moveCounter[4]+moveCounter[6]===30){
     setMessage("Victory for the O Player!!!")
     setClassNameStyle("ovictory")
     scoreboard[1]=[++scoreboard[1]]
     setScoreCounter(scoreboard)
   }

   else if(moveCounter.every(move => move!==" ")){
     setMessage("That's a tie!")
     setClassNameStyle("tie")
   }

  }, [moveCounter]);

  const handleButtonClick = () => {
    console.log("button clicked")
    setSquares(initialState)
    setMoveCounter(initialState)
    setMessage(null)
  }

  return (
    <div>
      <h1>Tic-Tac-Toe</h1>

      <div className="tablePosition">
        <table>
          <thead>
            <tr>
              <th colSpan="3">Next Player: {nextPlayer}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td onClick={() => handleClick(0)} className={squares[0]}>{squares[0]}</td>
              <td onClick={() => handleClick(1)} className={squares[1]}>{squares[1]}</td>
              <td onClick={() => handleClick(2)} className={squares[2]}>{squares[2]}</td>
            </tr>
            <tr>
              <td onClick={() => handleClick(3)} className={squares[3]}>{squares[3]}</td>
              <td onClick={() => handleClick(4)} className={squares[4]}>{squares[4]}</td>
              <td onClick={() => handleClick(5)} className={squares[5]}>{squares[5]}</td>
            </tr>
            <tr>
              <td onClick={() => handleClick(6)} className={squares[6]}>{squares[6]}</td>
              <td onClick={() => handleClick(7)} className={squares[7]}>{squares[7]}</td>
              <td onClick={() => handleClick(8)} className={squares[8]}>{squares[8]}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3" className="scoreboard">
              Scoreboard<br />
              X : {scoreCounter[0]}<br />
              O : {scoreCounter[1]}
              </td>
            </tr></tfoot>
        </table>
      </div>
      <h2><Notification message={message} classNameStyle={classNameStyle} handleButtonClick={handleButtonClick}/></h2>
    </div>
  );
};

export default App;
