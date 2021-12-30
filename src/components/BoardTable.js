import React from 'react'

const BoardTable = ({nextPlayer, handleClick, squares, scoreCounter}) => {

  return(
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
        </tr>
      </tfoot>
    </table>
    )
}


export default BoardTable