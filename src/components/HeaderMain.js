import React, { Component } from "react";
import { ReactComponent as BrandIsotypeMain } from "../img/Brand/Isotype/Main.svg";
import { ReactComponent as IconSolidFile } from "../img/Icon/Solid/file.svg";
import { ReactComponent as IconSolidMoon } from "../img/Icon/Solid/moon.svg";
import UrlResume from "../data/url-resume.json";

class HeaderMain extends Component {
	render() {
		return (
			<header className='Header-Main'>
				<div className='Wrapper-Logo'>
					<figure>
						<a className='Brand-Isotype-Header' href='#top'>
							<BrandIsotypeMain />
						</a>
					</figure>
					<div className='Logo Hide'>
						<a href='#top'>Cristopher Galarce</a>
					</div>
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
					<figure className='Icon-Link-Box Icon-Grey-to-Purp'>
						<a
							href={UrlResume["url-download-resume"]}
							target='_blank'
							rel='noopener noreferrer'>
							<IconSolidFile />
						</a>
					</figure>
					<figure className='Icon-Link-Box Icon-Grey-to-Purp Hide'>
						<a href='#top'>
							<IconSolidMoon />
						</a>
					</figure>
				</div>
			</header>
		);
	}
}

export default HeaderMain;
