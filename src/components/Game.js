import React, { Fragment, useState } from "react";
import { checkWinner } from "./Helpers/DataProvider";

import "./Game.css";
import Board from "./Board";
import GameOver from "./UI/GameOver";

const Game = () => {
	const [grid, setGrid] = useState([Array(9).fill(null)]);
	const [stepNumber, setStepNumber] = useState(0);
	const [isXNext, setXNext] = useState(true);
	const winner = checkWinner(grid[stepNumber]);
	const XO = isXNext ? "X" : "O";
	const [isGameOver, setIsGameOver] = useState(false);

	const handleClick = (event) => {
		const historyPoint = grid.slice(0, stepNumber + 1);
		const current = historyPoint[stepNumber];
		const squares = [...current];
		// 	Check if winner
		if (winner || squares[event]) {
			return;
		}

		squares[event] = XO;
		setGrid([...historyPoint, squares]);
		setStepNumber(historyPoint.length);
		setXNext(!isXNext);
		if (historyPoint.length === 9) {
			console.log("check");
			setIsGameOver(true);
		}
	};

	const startNewGame = () => {
		setGrid([Array(9).fill(null)]);
		setStepNumber(0);
		setXNext(true);
	};

	const gameOverHandler = () => {
		setIsGameOver(false);
		setGrid([Array(9).fill(null)]);
		setStepNumber(0);
		setXNext(true);
	};

	return (
		<React.Fragment>
			{winner && (
				<div className='winner-container'>
					<h3>Congratulations...</h3>
					<h1 className='winner-h'>{winner}</h1>
					<h2> You WON...</h2>
					<button className='btn-play' onClick={startNewGame}>
						Play Again
					</button>
				</div>
			)}
			{isGameOver && (
				<GameOver
					title='Game Over'
					message='It was nice Game !'
					onConfirm={gameOverHandler}
				/>
			)}
			{!winner && (
				<Fragment>
					<h1>Tic Tac Toe</h1>
					<Board grid={grid[stepNumber]} onClick={handleClick} />
				</Fragment>
			)}
		</React.Fragment>
	);
};

export default Game;
