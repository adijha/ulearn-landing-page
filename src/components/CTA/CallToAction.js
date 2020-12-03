import React from "react";
import mac from "./mac.png";
import "./callToAction.scss";
export default function CallToAction() {
	return (
		<div className="cta-container">
			<img src={mac} alt="computer-img" 
      className='cta-mac'
      />
			<div className="cta-content">
				<p className="cta-title"> جاهز للتعلم؟</p>
				<p className="cta-description"> نوفر لك أفضل الحصص التفاعلية اونلاين</p>
				<div className="cta-button">معرفة الأسعار</div>
			</div>
		</div>
	);
}
