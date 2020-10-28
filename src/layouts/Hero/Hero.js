import React, { Component } from "react";
import CtaSide from "../../components/Cta/CtaSide";
import CtaMain from "../../components/Cta/CtaMain";

class Hero extends Component {
	render() {
		return (
			<main className='Wrapper-Content-Hero'>
				<div className='Wrapper-Texts-Hero'>
					<h1 className='Title-Hero'>
						{this.props.h1FirstLine}
						<br />
						{this.props.h1SecondLine}
					</h1>
					<p className='Description-Hero'>{this.props.description}</p>
				</div>
				<div className='Wrapper-Buttons-Hero'>
					<CtaMain label='Get it now' />
					<CtaSide label='Or book a free demo' />
				</div>
			</main>
		);
	}
}

export default Hero;
