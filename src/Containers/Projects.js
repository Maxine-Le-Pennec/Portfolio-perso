import React from 'react';
import '../Assets/CSS/Projects.css';

import { Link } from 'react-router-dom';

// Component(s)
import HomeButton from '../Components/HomeButton';

// My projects pictures
import echoes from '../Assets/img/my projects/Echoes.png';
import formnest from '../Assets/img/my projects/Formnest.png';
import marvel from '../Assets/img/my projects/Marvel.png';
import portfolio from '../Assets/img/my projects/Portfolio.png';
const Projects = () => {
	return (
		<main className='projects-main-wrapper'>
			<HomeButton />
			<div className='projects-title-container'>
				<h2>My projects</h2>
				<div className='projects-title-underline'> </div>
			</div>
			<section className='projects-circles-section'>
				<Link to='echoes' className='projects-circle-container'>
					<img src={echoes} alt='echoes' />
				</Link>
				<Link to='/formnest' className='projects-circle-container'>
					<img src={formnest} alt='formnest' />
				</Link>
				<Link to='/marvel' className='projects-circle-container'>
					<img src={marvel} alt='marvel' />
				</Link>
				<Link to='/portfolio' className='projects-circle-container'>
					<img src={portfolio} alt='portfolio' />
				</Link>
			</section>
		</main>
	);
};

export default Projects;
