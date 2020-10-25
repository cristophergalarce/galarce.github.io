import React, { Component } from "react";
import { openPopupWidget } from "react-calendly";

class CtaSide extends Component {
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
			<button className='Cta Cta-Side' onClick={this.onClick}>
				<span className='Cta-Side-Text'>{this.props.label}</span>
			</button>
		);
	}
}

export default CtaSide;
