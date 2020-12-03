import "./App.scss";
import Header from "./components/header/Header";
import ProgressBar from "./components/circularProgressBar/ProgressBar";
import Hero from "./components/Hero/Hero";
import Calendar from "./components/calendar/Calendar";
import Toggle from "./components/toggle/Toggle";

function App() {
	return (
		<div >
			<Header />
      <ProgressBar/>
      
			<Hero/>
			<Calendar/>
			<Toggle/>

      <div style={{height:'300px'}}  />
		</div>
	);
}

export default App;
