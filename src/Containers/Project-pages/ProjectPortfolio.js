import React from 'react';
import '../../Assets/CSS/ProjectPortfolio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Component(s)
import HomeButton from '../../Components/HomeButton';

const ProjectPortfolio = () => {
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
				<div className='intersection-separator'></div>
				<section className='portfolio-info-wrapper'>
					<p>
						Project entirely made with React.js.
						<br />
						<br />
						The next step is to use a database to do my imports directly to the
						back.
					</p>
				</section>
				{/* <div className='intersection-separator' style={{ width: '50%' }}></div> */}
				<section className='portfolio-repo-wrapper'>
					<div style={{ fontSize: '10vw' }}>
						<FontAwesomeIcon icon={['fab', 'github']} color='#ffb800' />
					</div>

					<div>
						<a
							className='portfolio-repo-link'
							href='https://github.com/Marine-Le-Pennec/Portfolio-perso'
							target='_blank'
							rel='noreferrer'>
							Repository
						</a>
					</div>
				</section>
			</main>
		</div>
	);
};

export default ProjectPortfolio;
