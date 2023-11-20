import { Route, Routes } from "react-router";
import "./App.css";
import { Home, Reports, Sales } from "./pages";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/sales" element={<Sales />} />
				<Route path="/reports" element={<Reports />} />
			</Routes>
		</div>
	);
}

export default App;
