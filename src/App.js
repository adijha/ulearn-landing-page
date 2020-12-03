import "./App.scss";
import Header from "./components/header/Header";
import ProgressBar from "./components/circularProgressBar/ProgressBar";
import Hero from "./components/Hero/Hero";
import Calendar from "./components/calendar/Calendar";
import Toggle from "./components/toggle/Toggle";
import Grid from "./components/grid/Grid";
import CallToAction from "./components/CTA/CallToAction";

function App() {
	return (
		<div>
			<Header />
			<ProgressBar />

			<Hero />
			<Calendar />
			<Toggle />
			<Grid />
			<CallToAction/>
			<div style={{ height: "300px" }} />
		</div>
	);
}

export default App;
