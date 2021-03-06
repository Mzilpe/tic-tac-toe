import React from "react";
import "./Squares.css";
const Square = ({ value, onClick }) => {
	const style = value ? `squares ${value}` : `squares`;

	return (
		<button className={style} onClick={onClick}>
			{value}
		</button>
	);
};

export default Square;
