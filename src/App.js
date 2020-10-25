import React, { Component } from "react";
import "./style/bundle.css";
import HeaderMain from "./components/Header/HeaderMain";
import Hero from "./layouts/Hero/Hero";
import IconScrollDown from "./components/Button/IconScrollDown";

class App extends Component {
	render() {
		return (
			<div className='App'>
				<div className='Background-Sea'>
					<div className='Background-Main'>
						<div className='Background-Blur'>
							<div className='Layout'>
								<HeaderMain />
								<Hero />
								<IconScrollDown />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
