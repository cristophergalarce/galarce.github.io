import React, { Component } from "react";
import ButtonSide from "../components/ButtonSide";
import ButtonMain from "../components/ButtonMain";

class Hero extends Component {
	render() {
		return (
			<main className='Wrapper-Content-Hero'>
				<div className='Wrapper-Texts-Hero'>
					<h1 className='Title-Hero'>
						<span className='Text-Gradient'>Delightful experiences </span>
						<br />
						for your users
					</h1>
					<p className='Description-Hero'>
						Cristopher Galarce is the product designer built for bring desirable
						apps to life.
					</p>
				</div>
				<div className='Wrapper-Buttons-Hero'>
					<ButtonMain label='Get it now' />
					<ButtonSide label='Or book a free demo' />
				</div>
			</main>
		);
	}
}

export default Hero;
