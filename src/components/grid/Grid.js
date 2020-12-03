import React from "react";
import badge from "./badge.png";

import './grid.scss'
export default function Grid() {
	const data = [
		{ img: "", title: "شهادة من معهد معتمد", desc: "شهادة من معهد معتمد" },
		{ img: "", title: "شهادة من معهد معتمد", desc: "شهادة من معهد معتمد" },
		{ img: "", title: "شهادة من معهد معتمد", desc: "شهادة من معهد معتمد" },
		{ img: "", title: "شهادة من معهد معتمد", desc: "شهادة من معهد معتمد" },
		{ img: "", title: "شهادة من معهد معتمد", desc: "شهادة من معهد معتمد" },
		{ img: "", title: "شهادة من معهد معتمد", desc: "شهادة من معهد معتمد" },
	];

	return (
		<div className="grid-container">
			{data.map((item) => (
				<div className="grid-card">
					<img src={badge} alt="badgeimage" className="grid-image" />
					<h2 className="grid-title">{item.title}</h2>
					<p className="grid-desc">{item.desc}</p>
				</div>
			))}
		</div>
	);
}
