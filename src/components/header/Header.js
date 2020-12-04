import React from "react";
import whatsapp from "./whatsapp.png";
import drawer from "./drawer.png";
import "./header.scss";
export default function Header() {
	return (
		<>
			<div className="header-container">
				{/* <img src={drawer} className="header-drawer-img" alt="drawer" /> */}
				<div className="header-drawer-img"  >
				<i  className=" fas fa-th-large fa-2x" ></i>

				</div>
				<h1 className="header-title">Ülearn</h1>
				<div className="header-wp-wrap">
					<div className="flex-center">
						<img src={whatsapp} className="header-wp-img" alt="whatsapp" />
						<p className="header-wp-number">(+965) 98588891</p>
					</div>
					<div className="btn-outline">ابدأ التعلم</div>
				</div>
			</div>
			<hr style={{ border: "0.2px solid #E8E9F6" }} />
		</>
	);
}
