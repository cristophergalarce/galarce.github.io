import React, { Component } from "react";
import { openPopupWidget } from "react-calendly";

class BookButton extends Component {
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
			<button className='Button Button-Ghost' onClick={this.onClick}>
				Or book a free demo
			</button>
		);
	}
}

export default BookButton;
