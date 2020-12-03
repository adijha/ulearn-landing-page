import React from "react";
import './linearProgressBar.scss'
export default function LinearProgressBar() {
	const data = [
		{
			step: "L8",
			currentStep: false,
		},

		{
			step: "L7",
			currentStep: false,
		},

		{
			step: "L6",
			currentStep: false,
		},

		{
			step: "L5",
			currentStep: false,
		},

		{
			step: "L4",
			currentStep: false,
		},

		{
			step: "L3",
			currentStep: false,
		},

		{
			step: "L2",
			currentStep: true,
		},

		{
			step: "L1",
			currentStep: false,
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
								color: item.currentStep ? "white" : "black",
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
							<hr className="progress-hr" />
						</div>
					)}
				</>
			))}
		</div>
	);
}
