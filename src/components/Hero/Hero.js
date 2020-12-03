import React from "react";

export default function Hero() {
	return (
		<div
			style={{
				backgroundColor: "#F9F9FC",
				textAlign: "center",
				paddingBlock: "2.5rem",
				marginInline: "7vw",
				paddingInline: "12vw",
			}}
		>
			<h1>شكرا لإكمالكم اختبار مستوى اللغة الانجليزية مع يوليرن</h1>
			<h4 style={{ color: "#009dfe", fontSize: "17px", marginBlock: "30px" }}>
				مستواك في اللغة الإنجليزية هو مبتدئ (مستوى 2(
			</h4>
			<p style={{ lineHeight: 2, fontSize: "17px" }}>
				لقد تم ارسال النتيجة على الإيميل المسجل لدينا. الخطوة التالية هي التسجيل
				بالدورة المناسبة لك. من الممكن التسجيل من خلال الموقع الإلكتروني أو عن
				طريق التواصل على هذا الرقم <b>(+965) 98759691</b>
			</p>
		</div>
	);
}
