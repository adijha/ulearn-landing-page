import "./App.scss";
import Header from "./components/header/Header";
import ProgressBar from "./components/circularProgressBar/ProgressBar";
import Hero from "./components/Hero/Hero";
import Calendar from "./components/calendar/Calendar";

function App() {
	return (
		<div>
			<Header />
      <ProgressBar/>
      <Hero/>
			<Calendar/>
      <div style={{height:'1000px'}}  />
		</div>
	);
}

export default App;
