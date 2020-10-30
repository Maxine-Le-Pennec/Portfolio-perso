import React from 'react';
import '../Assets/CSS/Homepage.css';
import { Link } from 'react-router-dom';

import Footer from '../Components/Footer';

const Homepage = () => {
	return (
		<div id='homepage-container'>
			<h1>MARINE LE PENNEC</h1>
			<section className='presentation-circle-section'>
				<div className='presentation-circle-container'>
					<p>WEB DEVELOPER</p>
					<div></div>
					<p>REACT</p>
				</div>
			</section>
			<section className='navbar-section'>
				<div className='navbar-container'>
					<Link to='/about-me' className='Link'>
						<p>About me</p>
					</Link>
					<Link to='/projects' className='Link'>
						<p>My projects</p>
					</Link>
					<Link to='/skills' className='Link'>
						<p>Skills</p>
					</Link>
					<Link to='contact' className='Link'>
						<p>Contact</p>
					</Link>
				</div>
			</section>
			<Footer />
		</div>
	);
};

export default Homepage;
