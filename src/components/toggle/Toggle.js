import React, { useState } from "react";
import "./toggle.scss";
export default function Toggle() {
	const [active, setActive] = useState(2);
	return (
		<div className="toggle-container">
			<h1 className="toggle-title">الأوقات المتوفرة</h1>
			<div className="toggle-inner">
				<p className="toggle-desc">
					هذه هي الأوقات المتوفرة لهذاأيام
					<b>المستوى العمل: الاثنين الى الجمعة</b>
				</p>
				<div className="toggle-btn-container">
					<div
						className={`
							toggle-btn ${active === 1 ? "toggle-btn-active" : "toggle-btn-inactive"}
						`}
						onClick={() => setActive(1)}
					>
						حصص فردية
					</div>
					<div
						onClick={() => setActive(2)}
            className={`
            toggle-btn ${active === 2 ? "toggle-btn-active" : "toggle-btn-inactive"}
          `}
					>
						حصص جماعية
					</div>
				</div>
			</div>
		</div>
	);
}
