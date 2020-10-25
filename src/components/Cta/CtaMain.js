import React, { Component } from "react";

class CtaMain extends Component {
	handleClick = (e) => {
		e.preventDefault();
	};

	render() {
		return (
			<button className='Cta Cta-Main' onClick={this.handleClick}>
				<span className='Cta-Main-Text'>{this.props.label}</span>
			</button>
		);
	}
}

export default CtaMain;
