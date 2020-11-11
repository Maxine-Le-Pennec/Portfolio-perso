import React, { useState } from 'react';
import '../Assets/CSS/Skills.css';

// Component(s)
import HomeButton from '../Components/HomeButton';

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
import github from '../Assets/img/logos/github.png';

const Skills = () => {
	const activeSkillTitle = {
		react: 'REACT',
		css: 'CSS',
		html: 'HTML',
		node: 'NODE',
		heroku: 'HEROKU',
		netlify: 'NETFLIFY',
		mdb: 'MDB',
		github: 'GITHUB',
		visual: 'VISUAL',
	};

	// State
	const [inHover, setHover] = useState(null);

	return (
		<div className='skills-page-wrapper'>
			<HomeButton />
			<section className='skills-logo-top-section'>
				<div className='skill-logo-image-container'>
					<img
						src={javascriptlogo}
						alt='javascript'
						onMouseEnter={() => setHover(activeSkillTitle.javascript)}
						onMouseLeave={() => setHover(null)}
					/>
					<p
						className={
							inHover === activeSkillTitle.javascript
								? 'text-show'
								: 'text-hidden'
						}>
						Javascript
					</p>
				</div>
				<div className='skill-logo-image-container'>
					<img
						src={reactlogo}
						alt='react'
						onMouseEnter={() => setHover(activeSkillTitle.react)}
						onMouseLeave={() => setHover(null)}
					/>
					<p
						className={
							inHover === activeSkillTitle.react ? 'text-show' : 'text-hidden'
						}>
						React.js
					</p>
				</div>
				<div className='skill-logo-image-container'>
					<img
						src={htmllogo}
						alt='html'
						onMouseEnter={() => setHover(activeSkillTitle.html)}
						onMouseLeave={() => setHover(null)}
					/>
					<p
						className={
							inHover === activeSkillTitle.html ? 'text-show' : 'text-hidden'
						}>
						HTML 5
					</p>
				</div>
				<div className='skill-logo-image-container'>
					<img
						src={csslogo}
						alt='css'
						onMouseEnter={() => setHover(activeSkillTitle.css)}
						onMouseLeave={() => setHover(null)}
					/>
					<p
						className={
							inHover === activeSkillTitle.css ? 'text-show' : 'text-hidden'
						}>
						CSS 3
					</p>
				</div>
			</section>
			<section className='skills-logo-middle-section'>
				<div className='skill-logo-image-container'>
					<img
						src={nodelogo}
						alt='node'
						onMouseEnter={() => setHover(activeSkillTitle.node)}
						onMouseLeave={() => setHover(null)}
					/>
					<p
						className={
							inHover === activeSkillTitle.node ? 'text-show' : 'text-hidden'
						}>
						Node.js
					</p>
				</div>

				<div className='skills-title-circle'>
					<h2>Skills</h2>
					<div> </div>
				</div>
				<div className='skill-logo-image-container'>
					<img
						src={visuallogo}
						alt='visual studio'
						onMouseEnter={() => setHover(activeSkillTitle.visual)}
						onMouseLeave={() => setHover(null)}
					/>
					<p
						className={
							inHover === activeSkillTitle.visual ? 'text-show' : 'text-hidden'
						}>
						Visual Studio
					</p>
				</div>
			</section>
			<section className='skills-logo-bottom-section'>
				<div className='skill-logo-image-container'>
					<img
						src={mongologo}
						alt='mongo db'
						onMouseEnter={() => setHover(activeSkillTitle.mdb)}
						onMouseLeave={() => setHover(null)}
					/>
					<p
						className={
							inHover === activeSkillTitle.mdb ? 'text-show' : 'text-hidden'
						}>
						Mongo DB
					</p>
				</div>

				<div className='skill-logo-image-container'>
					<img
						src={herokulogo}
						alt='heroku'
						onMouseEnter={() => setHover(activeSkillTitle.heroku)}
						onMouseLeave={() => setHover(null)}
					/>
					<p
						className={
							inHover === activeSkillTitle.heroku ? 'text-show' : 'text-hidden'
						}>
						Heroku
					</p>
				</div>

				<div className='skill-logo-image-container'>
					<img
						src={netlifylogo}
						alt='netlify'
						onMouseEnter={() => setHover(activeSkillTitle.netlify)}
						onMouseLeave={() => setHover(null)}
					/>
					<p
						className={
							inHover === activeSkillTitle.netlify ? 'text-show' : 'text-hidden'
						}>
						Netlify
					</p>
				</div>

				<div className='skill-logo-image-container'>
					<img
						src={github}
						alt='github'
						onMouseEnter={() => setHover(activeSkillTitle.github)}
						onMouseLeave={() => setHover(null)}
					/>
					<p
						className={
							inHover === activeSkillTitle.github ? 'text-show' : 'text-hidden'
						}>
						Github
					</p>
				</div>
			</section>
		</div>
	);
};

export default Skills;
