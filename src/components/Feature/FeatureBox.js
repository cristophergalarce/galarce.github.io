import React, { Component } from "react";

class FeatureBox extends Component {
	render() {
		return (
			<div className='Feature-Big'>
				<figure className='Molecule-Icon-Box'>{this.props.icon}</figure>
				<div className='Wrapper-Texts-Feature'>
					<h3 className='Title-Feature'>{this.props.title}</h3>
					<p className='Description-Feature'>{this.props.description}</p>
				</div>
			</div>
		);
	}
}

export default FeatureBox;
