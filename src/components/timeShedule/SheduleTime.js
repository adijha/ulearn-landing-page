import React from "react";
import "./sheduleTime.scss";
export default function SheduleTime() {
	return (
		<div className="shedule-container">
			<div className="shedule-up-padding"></div>
			<div className="shedule-header">
				<p style={{ fontSize: "22px", fontWeight: "bold" }}>حصص جماعية</p>
				<p>الحصص الجماعية مكونه من 5 الى 10 طلاب</p>
				<hr style={{ border: "1px solid #ededed" }} />
			</div>

			<div
				className="shedule-btn"
			>
				الأسعار
			</div>
			<div
				className="shedule-radios"
			>
				{["ساعة يوميا", "ساعتين يوميا"].map((i) => (
					<div
					className="shedule-radio"
					>
						<p style={{ fontSize: "18px" }}>{i}</p>
						<input type="radio" id={i} value={i}></input>
					</div>
				))}
			</div>
			<div>
				{[1, 2, 3].map((i) => (
					<div
						className="shedule-time"
					>
						<p style={{ fontWeight: "bold" }}>
							<i class="far fa-clock"></i> 9:00-10:30
						</p>
						<p
							style={{ fontWeight: "600", fontSize: "17px", color: "#989899" }}
						>
							ة الى الاثنين
						</p>
					</div>
				))}
			</div>
		</div>
	);
}
