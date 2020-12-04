import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
export default function App() {
	const percentage = 2;
	return (
		<div
			style={{
				height: "290px",
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
				styles={{
					trail: {
						stroke: "#E4E7F6",
					},
					text: {
						fill: "#009dfe",
						fontSize: "20px",
						fontWeight: "bold",
					},
					background: {
						fill: "#009dfe",
					},
				}}
			/>
			<h2 style={{ fontSize: "30px" }}>مبتدئ 2</h2>
		</div>
	);
}
