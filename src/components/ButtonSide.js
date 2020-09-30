import React, { Component } from "react";
import { openPopupWidget } from "react-calendly";

class ButtonSide extends Component {
	onClick = ({ url, prefill, pageSettings, utm }) => {
		openPopupWidget({
			url: "https://calendly.com/galarce/demo",
			prefill,
			pageSettings,
			utm,
		});
	};

	render() {
		return (
			<button className='Button Button-Side' onClick={this.onClick}>
				<span className='Text'>{this.props.label}</span>
			</button>
		);
	}
}

export default ButtonSide;
