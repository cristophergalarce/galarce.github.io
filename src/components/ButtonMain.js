import React, { Component } from "react";

class ButtonMain extends Component {
	handleClick = (e) => {
		e.preventDefault();
	};

	render() {
		return (
			<button className='Button Button-Main' onClick={this.handleClick}>
				{this.props.label}
			</button>
		);
	}
}

export default ButtonMain;
