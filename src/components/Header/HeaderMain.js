import React, { Component } from "react";
import { ReactComponent as BrandIsotypeMasked } from "../../assets/Brand/Isotype/Masked.svg";
import { ReactComponent as IconSolidFile } from "../../assets/Icon/Solid/file.svg";
import UrlResume from "../../data/url-resume.json";
//import ToggleMode from "./ToggleMode";

class HeaderMain extends Component {
	render() {
		return (
			<header className='Header-Main'>
				<div className='Wrapper-Logo'>
					<figure>
						<a className='Brand-Isotype-Header' href='#top'>
							<BrandIsotypeMasked />
						</a>
					</figure>
					<div className='Pill-Sky Hide'>
						<p>Now available</p>
					</div>
				</div>
				<nav className='Nav-Main-Header'>
					<ul>
						<li className='Nav-Button'>
							<a href='#top'>Discover</a>
						</li>
						<li className='Nav-Button'>
							<a href='#top'>How it works</a>
						</li>
						<li className='Nav-Button'>
							<a href='#top'>Features</a>
						</li>
						<li className='Nav-Button'>
							<a href='#top'>Contact</a>
						</li>
					</ul>
				</nav>
				<div className='Wrapper-Icons-Header'>
					<figure className='Molecule-Button-Icon-Box'>
						<a
							href={UrlResume["url-download-resume"]}
							target='_blank'
							rel='noopener noreferrer'>
							<IconSolidFile />
						</a>
					</figure>
				</div>
			</header>
		);
	}
}

export default HeaderMain;
