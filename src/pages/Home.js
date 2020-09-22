import React from "react";
import BookButton from "../components/BookButton";

function Home() {
	return (
		<div className='Home'>
			<main className='Wrapper-Hero'>
				<div className='Content-Hero'>
					<h1 className='Title-Hero'>
						The <span className='Old-Style Text-Sky'>Designer</span> for your
						agile scrum team <span className='Beta-Note Text-Sky'>v1.0</span>
					</h1>
					<p className='Description-Hero Text-Gray'>
						Cristopher is your UX/UI Designer built for help you to create
						better products for your users.
					</p>
					<div className='Buttons-Hero'>
						<a href='#top' className='Button Button-Main'>
							Get it now
						</a>
						<BookButton />
					</div>
				</div>
			</main>
		</div>
	);
}

export default Home;
