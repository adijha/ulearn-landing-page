import React from "react";
import "./linearProgressBar.scss";
export default function LinearProgressBar() {
	const data = [
		{
			step: "L8",
			currentStep: false,
			completed: false,
		},

		{
			step: "L7",
			currentStep: false,
			completed: false,
		},

		{
			step: "L6",
			currentStep: false,
			completed: false,
		},

		{
			step: "L5",
			currentStep: false,
			completed: false,
		},

		{
			step: "L4",
			currentStep: false,
			completed: false,
		},

		{
			step: "L3",
			currentStep: false,
			completed: false,
		},

		{
			step: "L2",
			currentStep: true,
			completed: true,
		},

		{
			step: "L1",
			currentStep: false,
			completed: true,
		},
	];
	return (
		<div className="linear-progressbar">
			{data.map((item) => (
				<>
					<div>
						<div
							className="linear-progress"
							style={{
								backgroundColor: item.currentStep ? "#009DFE" : "white",
								color: item.currentStep
									? "white"
									: item.completed
									? "#009DFE"
									: "black",
							}}
						>
							{item.step}
						</div>
						<p
							style={{
								color: item.currentStep ? "#009DFE" : "black",
							}}
							className="linear-progress-desc"
						>
							ممتاز
						</p>
					</div>
					{item.step !== "L1" && (
						<div style={{ flex: 1 }}>
							<hr
								style={{
									border: `0.4px solid 
								${item.completed ? "#009DFE" : "#eaebf7"}`,
								}}
								className="progress-hr"
							/>
						</div>
					)}
				</>
			))}
		</div>
	);
}
