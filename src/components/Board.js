import React from "react";
import Square from "./Squares";

import "./Board.css";
const Board = ({ grid, onClick }) => (
	<div className='board'>
		{grid.map((square, index) => (
			<Square key={index} value={square} onClick={() => onClick(index)} />
		))}
	</div>
);

export default Board;
