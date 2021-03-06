import "./App.scss";
import Header from "./components/header/Header";
import ProgressBar from "./components/circularProgressBar/ProgressBar";
import Hero from "./components/Hero/Hero";
import Calendar from "./components/calendar/Calendar";
import Toggle from "./components/toggle/Toggle";
import Grid from "./components/grid/Grid";
import CallToAction from "./components/CTA/CallToAction";
import Footer from "./components/footer/Footer";
import SheduleTime from "./components/timeShedule/SheduleTime";
import LinearProgressBar from "./components/linearProgressbar/LinearProgressBar";

function App() {
	return (
		<>
			<Header />
			<ProgressBar />
			<Hero />
			<LinearProgressBar />
			<Calendar />
			<Toggle />
			<SheduleTime />
			<Grid />
			<CallToAction />
			<Footer />
		</>
	);
}

export default App;
