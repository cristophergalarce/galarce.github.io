import React from "react";
import ReactDOM from "react-dom";
import "./style/main.css";
import HeaderMain from "./components/HeaderMain";
import Hero from "./components/Hero";
import Space from "./components/Space";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
	<React.StrictMode>
		<HeaderMain />
		<Hero />
		<Space />
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
