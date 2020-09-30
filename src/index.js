import React from "react";
import ReactDOM from "react-dom";
import "./style/main.css";
import HeaderMain from "./layouts/HeaderMain";
import Hero from "./layouts/Hero";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
	<React.StrictMode>
		<HeaderMain />
		<Hero />
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
