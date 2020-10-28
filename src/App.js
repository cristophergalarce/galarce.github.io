import React, { Component } from "react";
import "./style/bundle.sass";
import HeaderMain from "./components/Header/HeaderMain";
import Hero from "./layouts/Hero/Hero";
import IconScrollDown from "./components/Button/IconScrollDown";
import SectionSkills from "./layouts/Section/SectionSkills";

class App extends Component {
	render() {
		return (
			<div className='App'>
				<div className='Background-Sea'>
					<div className='Background-Main'>
						<div className='Background-Blur'>
							<div className='Layout'>
								<HeaderMain
									navMenu1='Discover'
									navMenu2='How it works'
									navMenu3='Features'
									navMenu4='Contact'
								/>
								<Hero
									h1FirstLine='Delightful experiences'
									h1SecondLine='for your users'
									description='Cristopher Galarce is the product designer built for bring desirable apps to life.'
								/>
								<IconScrollDown />
								<SectionSkills
									h2FirstLine='Ultra powers'
									h2SecondLine='for your project'
									description='Let him work and focus on what matters: business.'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
