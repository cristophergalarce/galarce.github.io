import React, { Component } from "react";
import { ReactComponent as IconSolidMoon } from "../img/Icon/Solid/moon.svg";

const modes = ["light", "dark"];

const user = {
	mode: "light",
};

class ToggleMode extends Component {
	changeMode = (mode) => {
		user.mode = mode;

		document.documentElement.className = "";
		document.documentElement.classList.add("mode-${user.mode}");

		alert("Mode updated...");
	};

	render() {
		return (
			<figure className='Icon-Link-Box Icon-Grey-to-Purp'>
				<a href='#top' onClick={this.changeMode}>
					<IconSolidMoon />
				</a>
			</figure>
		);
	}
}

export default ToggleMode;
