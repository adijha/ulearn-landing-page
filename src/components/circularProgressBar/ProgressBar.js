import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const percentage = 2;

export default function App() {
	return (
		<div
			style={{
				height: "250px",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				marginBlock: "4rem",
			}}
		>
			<CircularProgressbar
				value={percentage}
				text={`L${percentage}`}
				minValue={1}
				maxValue={8}
				styles={buildStyles({
					textSize: "16px",
					pathColor: "#009dfe",
					textColor: "#009dfe",
				})}
			/>
			<h2>مبتدئ 2</h2>
		</div>
	);
}
