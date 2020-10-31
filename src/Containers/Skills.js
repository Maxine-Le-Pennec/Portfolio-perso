import React from 'react';
import '../Assets/CSS/Skills.css';

// Component(s)
import HomeButton from '../Components/HomeButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Logo import
import csslogo from '../Assets/img/logos/css.png';
import herokulogo from '../Assets/img/logos/heroku.png';
import htmllogo from '../Assets/img/logos/html.png';
import javascriptlogo from '../Assets/img/logos/javascript.png';
import netlifylogo from '../Assets/img/logos/netlify.png';
import nodelogo from '../Assets/img/logos/node.png';
import reactlogo from '../Assets/img/logos/React.png';
import visuallogo from '../Assets/img/logos/visual.png';
import mongologo from '../Assets/img/logos/MDB.png';

const Skills = () => {
	return (
		<div className='skills-page-wrapper'>
			<HomeButton />
			<section className='skills-logo-top-section'>
				<img src={javascriptlogo} alt='javascript' />
				<img src={reactlogo} alt='react' />
				<img src={htmllogo} alt='html' />
				<img src={csslogo} alt='css' />
			</section>
			<section className='skills-logo-middle-section'>
				<img src={nodelogo} alt='node' />
				<div className='skills-title-circle'>
					<h2>Skills</h2>
					<div> </div>
				</div>
				<img src={visuallogo} alt='visual studio' />
			</section>
			<section className='skills-logo-bottom-section'>
				<img src={mongologo} alt='mongo db' />
				<img src={herokulogo} alt='heroku' />
				<img src={netlifylogo} alt='netlify' />
				<FontAwesomeIcon icon={['fab', 'github']} size='10x' color='white' />
			</section>
		</div>
	);
};

export default Skills;
