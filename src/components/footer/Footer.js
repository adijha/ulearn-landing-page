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
						<h5 className="footer-row-title" >قانون</h5>
						<p className='footer-p' >سياسة الخصوصية</p>
						<p className='footer-p' >شروط الاستخدام</p>
					</div>
					<div className="footer-third">
						<h5 className="footer-row-title" >طريقتنا بالتعلم</h5>
						<p className='footer-p' >مستويات اللغة</p>
						<p className='footer-p' >طرق التعلم</p>
						<p className='footer-p' >اختبار مستوى</p>
					</div>
				</div>
				<div className="footer-part-ii">
					<div className="footer-fourth">
						<h5 className="footer-row-title" >اللغات</h5>
						<p className='footer-p' >الانجليزي</p>
						<p className='footer-p' >الفرنسي</p>
						<p className='footer-p' >الفرنسي</p>
						<p className='footer-p' >الفرنسي</p>
						<p className='footer-p' >آيلتس</p>
					</div>
					<div className="footer-fifth">
						<h5 className="footer-row-title" >اللغات</h5>
						<p className='footer-p' >الانجليزي</p>
						<p className='footer-p' >مقالات</p>
						<p className='footer-p' >مقالات</p>
						<p className='footer-p' >اسئلة شائعة</p>
						<p className='footer-p' >الفرنسي</p>
					</div>
				</div>
			</div>
		</div>
	);
}
