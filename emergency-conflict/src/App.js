import React, { Component } from "react";
import Hello from "./Hello";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Hello name={"Chicken"} />
			</div>
		);
	}
}

export default App;
