import React from "react";
import "./footer.scss";
export default function Footer() {
	return (
		<div className="footer-container">
			<div className="footer-logo-side">
				<h1 style={{fontSize:'37px'}}  >Ülearn</h1>
				<div className="footer-social-icons">
					<i class="fab fa-linkedin-in"></i>
					<i class="fab fa-youtube"></i>
					<i class="fab fa-instagram"></i>
					<i class="fab fa-twitter"></i>
					<i class="fab fa-facebook-f"></i>
				</div>
				<div className="footer-location">
					<i class="fas fa-map-marker-alt"></i>

					<p className="footer-place" >Kuwait</p>
          <i class="fas fa-chevron-down"></i>
				</div>
			</div>
			<div className="footer-half">
				<div className="footer-part-i">
					<div className="footer-second">
						<h5>قانون</h5>
						<p>سياسة الخصوصية</p>
						<p>شروط الاستخدام</p>
					</div>
					<div className="footer-third">
						<h5>طريقتنا بالتعلم</h5>
						<p>مستويات اللغة</p>
						<p>طرق التعلم</p>
						<p>اختبار مستوى</p>
					</div>
				</div>
				<div className="footer-part-ii">
					<div className="footer-fourth">
						<h5>اللغات</h5>
						<p>الانجليزي</p>
						<p>الفرنسي</p>
						<p>الفرنسي</p>
						<p>الفرنسي</p>
						<p>آيلتس</p>
					</div>
					<div className="footer-fifth">
						<h5>اللغات</h5>
						<p>الانجليزي</p>
						<p>مقالات</p>
						<p>مقالات</p>
						<p>اسئلة شائعة</p>
						<p>الفرنسي</p>
					</div>
				</div>
			</div>
		</div>
	);
}
