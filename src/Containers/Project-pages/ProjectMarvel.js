import React, { useState } from 'react';
import '../../Assets/CSS/ProjectMarvel.css';

// Component(s)
import HomeButton from '../../Components/HomeButton';
import Footer from '../../Components/Footer';

// Logo(s)
import reacteur from '../../Assets/img/logos/react_logo.png';
import react from '../../Assets/img/logos/React.png';
import css from '../../Assets/img/logos/css.png';
import html from '../../Assets/img/logos/html.png';
import node from '../../Assets/img/logos/node.png';
import heroku from '../../Assets/img/logos/heroku.png';
import netlify from '../../Assets/img/logos/netlify.png';

// Carousel
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import main1 from '../../Assets/img/my_projects/carousel_marvel/main1.png';
import main2 from '../../Assets/img/my_projects/carousel_marvel/main2.png';
import caract from '../../Assets/img/my_projects/carousel_marvel/caract.png';
import comics from '../../Assets/img/my_projects/carousel_marvel/comics.png';
import fav from '../../Assets/img/my_projects/carousel_marvel/fav.png';

const ProjectMarvel = () => {
	const activeUnderTitle = {
		reacteur: 'REACTEUR',
		react: 'REACT',
		css: 'CSS',
		html: 'HTML',
		node: 'NODE',
		heroku: 'HEROKU',
		netlify: 'NETFLIFY',
	};

	// State
	const [inHover, setHover] = useState(null);

	return (
		<div className='marvel-project-wrapper'>
			<HomeButton />

			<div className='header-wrapper'>
				<h2>MARVEL</h2>
				<div></div>
			</div>

			<section className='marvel-info-wrapper'>
				<section className='marvel-picture-wrapper'>
					<Carousel showThumbs={true}>
						<div>
							<img src={main1} alt='top main page' />
							<p className='legend'> Main page (top)</p>
						</div>
						<div>
							<img src={main2} alt='bottom main page' />
							<p className='legend'> Main page (bottom)</p>
						</div>
						<div>
							<img src={caract} alt='characters page' />
							<p className='legend'> Characters page</p>
						</div>
						<div>
							<img src={comics} alt='comics page' />
							<p className='legend'> Comics page</p>
						</div>
						<div>
							<img src={fav} alt='favorites page' />
							<p className='legend'> Favorites page</p>
						</div>
					</Carousel>
				</section>
				<div className='intersection-separator'></div>
				<section className='marvel-despription-wrapper'>
					<p>
						Creation of a website allowing access to comics, comic book
						characters and managing a system of favorites. Each character sheet
						gives access to all the comics related to it.
					</p>
				</section>
				<section className='marvel-stacks-wrapper'>
					<h2>Stack</h2>
					<div className='stack-separator'></div>
					<div className='marvel-stacks-container'>
						<div className='marvel-stack-container'>
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
							<div>
								<img
									src={node}
									alt='node'
									onMouseEnter={() => setHover(activeUnderTitle.node)}
									onMouseLeave={() => setHover(null)}
								/>
								<p
									className={
										inHover === activeUnderTitle.node
											? 'text-show'
											: 'text-hidden'
									}>
									Node.js
								</p>
							</div>
							<div>
								<img
									src={heroku}
									alt='heroku'
									onMouseEnter={() => setHover(activeUnderTitle.heroku)}
									onMouseLeave={() => setHover(null)}
								/>
								<p
									className={
										inHover === activeUnderTitle.heroku
											? 'text-show'
											: 'text-hidden'
									}>
									Heroku
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className='project-marvel-wrapper'>
					<div className='project-marvel-link-container'>
						<p>
							You can see the project{' '}
							<a
								href='https://marine-lepennec-marvel.netlify.app/'
								target='_blank'
								rel='noreferrer'
								className='project-marvel-link'>
								here
							</a>
						</p>
					</div>
				</section>
				<section className='marvel-logos-wrapper'>
					<div className='marvel-logo-container'>
						<a
							href='https://www.lereacteur.io/'
							target='_blank'
							rel='noreferrer'
							className='marvel-logo'
							onMouseEnter={() => setHover(activeUnderTitle.reacteur)}
							onMouseLeave={() => setHover(null)}>
							<img src={reacteur} alt='reacteur' />
						</a>
						<p
							className={
								inHover === activeUnderTitle.reacteur
									? 'text-show'
									: 'text-hidden'
							}>
							Le Reacteur
						</p>
					</div>
				</section>
			</section>
			<Footer />
		</div>
	);
};

export default ProjectMarvel;
