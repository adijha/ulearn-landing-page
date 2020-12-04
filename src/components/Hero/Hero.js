import React from "react";
import './hero.scss'
export default function Hero() {
	return (
		<div
			className="hero-container"
		>
			<h1 className="hero-header">شكرا لإكمالكم اختبار مستوى اللغة الانجليزية مع يوليرن</h1>
			<h4 className="hero-title">
				مستواك في اللغة الإنجليزية هو مبتدئ (مستوى 2(
			</h4>
			<p className="hero-desc">
				لقد تم ارسال النتيجة على الإيميل المسجل لدينا. الخطوة التالية هي التسجيل
				بالدورة المناسبة لك. من الممكن التسجيل من خلال الموقع الإلكتروني أو عن
				طريق التواصل على هذا الرقم <b>(+965) 98759691</b>
			</p>
		</div>
	);
}
