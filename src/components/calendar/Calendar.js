import React from "react";
import calendar from "./calendar.png";
import './calendar.scss'
export default function Calendar() {
	return (
		<div 
    className="calendar-card"
    >
      <img src={calendar} alt="calendar-img" 
      className="calendar-img"
      />
			<div className="calendar-text">
				<h5
        className="calendar-header"
        >المستوى القادم - مبتدئ 3</h5>
				<p
        
        className="calendar-desc"
        >
					سوف تصل لهذا المستوى خلال
					<b>4 اسابيع</b>
				</p>
			</div>
		</div>
	);
}
