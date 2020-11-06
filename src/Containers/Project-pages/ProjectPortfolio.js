import React, { useState } from 'react';
import '../../Assets/CSS/ProjectPortfolio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Logos
import react from '../../Assets/img/logos/React.png';
import css from '../../Assets/img/logos/css.png';
import html from '../../Assets/img/logos/html.png';
import netlify from '../../Assets/img/logos/netlify.png';

// Component(s)
import HomeButton from '../../Components/HomeButton';
import Footer from '../../Components/Footer';

const ProjectPortfolio = () => {
	const activeUnderTitle = {
		reacteur: 'REACTEUR',
		react: 'REACT',
		css: 'CSS',
		html: 'HTML',
		node: 'NODE',
		heroku: 'HEROKU',
		netlify: 'NETFLIFY',
		mdb: 'MDB',
		repo: 'REPO',
	};

	// State
	const [inHover, setHover] = useState(null);

	return (
		<div className='portfolio-project-wrapper'>
			<HomeButton />

			<div className='header-wrapper'>
				<h2>PORTFOLIO</h2>
				<div></div>
			</div>
			<main className='portfolio-main-wrapper'>
				<section className='portfolio-picture-wrapper'>
					<img
						src='https://media.giphy.com/media/VABbCpX94WCfS/giphy.gif'
						alt='oupsi smile'
					/>
					<p>You're already here...</p>
				</section>
				<div className='intersection-separator'> </div>
				<section className='portfolio-info-wrapper'>
					<p>
						Project entirely made with React.js.
						<br />
						<br />
						The next step is to use a database to do my imports directly to the
						back.
					</p>
				</section>

				<section className='portfolio-stacks-wrapper'>
					<h2>Stack</h2>
					<div className='stack-separator'></div>
					<div className='portfolio-stacks-container'>
						<div className='portfolio-stack-container'>
							<div>
								<img
									src={react}
									alt='react'
									onMouseEnter={() => setHover(activeUnderTitle.react)}
									onMouseLeave={() => setHover(null)}
								/>
								<p
									className={
										inHover === activeUnderTitle.react
											? 'text-show'
											: 'text-hidden'
									}>
									React.js
								</p>
							</div>
							<div>
								<img
									src={css}
									alt='css'
									onMouseEnter={() => setHover(activeUnderTitle.css)}
									onMouseLeave={() => setHover(null)}
								/>
								<p
									className={
										inHover === activeUnderTitle.css
											? 'text-show'
											: 'text-hidden'
									}>
									CSS 3
								</p>
							</div>
							<div>
								<img
									src={html}
									alt='html'
									onMouseEnter={() => setHover(activeUnderTitle.html)}
									onMouseLeave={() => setHover(null)}
								/>
								<p
									className={
										inHover === activeUnderTitle.html
											? 'text-show'
											: 'text-hidden'
									}>
									HTML 5
								</p>
							</div>
							<div>
								<img
									src={netlify}
									alt='netlify'
									onMouseEnter={() => setHover(activeUnderTitle.netlify)}
									onMouseLeave={() => setHover(null)}
								/>
								<p
									className={
										inHover === activeUnderTitle.netlify
											? 'text-show'
											: 'text-hidden'
									}>
									Netlify
								</p>
							</div>
						</div>
					</div>
				</section>
				{/* <div className='intersection-separator' style={{ width: '50%' }}></div> */}
				<section className='portfolio-repo-wrapper'>
					<a
						href='https://github.com/Marine-Le-Pennec/Portfolio-perso'
						target='_blank'
						rel='noreferrer'
						onMouseEnter={() => setHover(activeUnderTitle.repo)}
						onMouseLeave={() => setHover(null)}
						style={{ fontSize: '15vh', paddingBottom: '1%' }}>
						<FontAwesomeIcon icon={['fab', 'github']} color='#ffb800' />
					</a>

					<div>
						<p
							className={
								inHover === activeUnderTitle.repo ? 'text-show' : 'text-hidden'
							}>
							Repository
						</p>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
};

export default ProjectPortfolio;
