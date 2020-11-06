import React, { useState } from 'react';
import '../../Assets/CSS/ProjectEchoes.css';

// Carousel
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Carousel pictures
import log from '../../Assets/img/my_projects/carousel_echoes/main.png';
import contact from '../../Assets/img/my_projects/carousel_echoes/contact.png';
import taylormade from '../../Assets/img/my_projects/carousel_echoes/taylormade.png';
import orderpageone from '../../Assets/img/my_projects/carousel_echoes/order1.png';
import orderpagetwo from '../../Assets/img/my_projects/carousel_echoes/order2.png';

// Logo pictures
import echoes from '../../Assets/img/logos/echoes_logo.png';
import koudetat from '../../Assets/img/logos/LOGO_KOUDETAT.png';
import reacteur from '../../Assets/img/logos/react_logo.png';

// Logo(s) Stack
import react from '../../Assets/img/logos/React.png';
import css from '../../Assets/img/logos/css.png';
import html from '../../Assets/img/logos/html.png';
import node from '../../Assets/img/logos/node.png';
import heroku from '../../Assets/img/logos/heroku.png';
import netlify from '../../Assets/img/logos/netlify.png';
import mdb from '../../Assets/img/logos/MDB.png';
import forest from '../../Assets/img/logos/forest.png';

// Import component(s)
import HomeButton from '../../Components/HomeButton';
import Footer from '../../Components/Footer';

const ProjectEchoes = () => {
	const activeUnderTitle = {
		reacteur: 'REACTEUR',
		echoes: 'ECHOES',
		koudetat: 'KOUDETAT',
		react: 'REACT',
		css: 'CSS',
		html: 'HTML',
		node: 'NODE',
		heroku: 'HEROKU',
		netlify: 'NETFLIFY',
		mdb: 'MDB',
		forest: 'FOREST',
	};

	// State
	const [inHover, setHover] = useState(null);

	return (
		<div className='echoes-project-wrapper'>
			<HomeButton />

			<div className='header-wrapper'>
				<h2>ECHOES</h2>
				<div></div>
			</div>

			<section className='echoes-info-wrapper'>
				<section className='echoes-picture-wrapper'>
					<Carousel showThumbs={true}>
						<div>
							<img src={log} alt='loggin page' />
							<p className='legend'> Loggin page</p>
						</div>
						<div>
							<img src={contact} alt='contact page' />
							<p className='legend'> Contact page</p>
						</div>
						<div>
							<img src={taylormade} alt='contact page' />
							<p className='legend'> Taylormade page</p>
						</div>
						<div>
							<img src={orderpageone} alt='order page' />
							<p className='legend'> Order page</p>
						</div>
						<div>
							<img src={orderpagetwo} alt='order page' />
							<p className='legend'> order page</p>
						</div>
					</Carousel>
				</section>
				<div className='intersection-separator'></div>
				<section className='echoes-despription-wrapper'>
					<p>
						As part of my end of study at the Reactor, I realized with four
						other students and in two weeks, an MVP for the company{' '}
						<strong>Echoes</strong>. This is a website entirely made in{' '}
						<strong>React.js</strong> for the Front-end and on{' '}
						<strong>Node.js</strong> / <strong>Express</strong> /
						<strong> MongoDB</strong> for the Back-end. As for the back office,
						it was entirely carried out on <strong>Forest Admin</strong>. <br />
						<br />
						The application allows customer / company relationship on the
						production of tailor-made podcasts. I held the role of Product-owner
						as well as front-end developer throughout the project. This double
						hat allowed me to develop while having a decision-making perspective
						on the evolution of the project and the technical choices, in close
						collaboration with the Lead.
					</p>
				</section>
				<section className='echoes-stacks-wrapper'>
					<h2>Stack</h2>
					<div className='stack-separator'></div>
					<div className='echoes-stacks-container'>
						<div className='echoes-stack-container'>
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
							<div>
								<img
									src={mdb}
									alt='mongo db'
									onMouseEnter={() => setHover(activeUnderTitle.mdb)}
									onMouseLeave={() => setHover(null)}
								/>
								<p
									className={
										inHover === activeUnderTitle.mdb
											? 'text-show'
											: 'text-hidden'
									}>
									Mongo DB
								</p>
							</div>
							<div>
								<img
									src={forest}
									alt='forest admin'
									onMouseEnter={() => setHover(activeUnderTitle.forest)}
									onMouseLeave={() => setHover(null)}
								/>
								<p
									className={
										inHover === activeUnderTitle.forest
											? 'text-show'
											: 'text-hidden'
									}>
									Forest Admin
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className='project-echoes-wrapper'>
					<div className='project-echoes-link-container'>
						<p>
							You can see the project{' '}
							<a
								href='https://echoes-mvp.netlify.app/'
								target='_blank'
								rel='noreferrer'
								className='project-echoes-link'>
								here
							</a>
						</p>
					</div>
				</section>
				<section className='echoes-logos-wrapper'>
					<div className='echoes-logo-container'>
						<a
							href='https://echoes.studio/'
							target='_blank'
							rel='noreferrer'
							className='echoes-logo'
							onMouseEnter={() => setHover(activeUnderTitle.echoes)}
							onMouseLeave={() => setHover(null)}>
							<img src={echoes} alt='echoes' />
						</a>
						<p
							className={
								inHover === activeUnderTitle.echoes
									? 'text-show'
									: 'text-hidden'
							}>
							Echoes
						</p>
					</div>

					<div className='echoes-logo-container'>
						<a
							href='https://www.koudetat.co/'
							target='_blank'
							rel='noreferrer'
							className='echoes-logo'
							onMouseEnter={() => setHover(activeUnderTitle.koudetat)}
							onMouseLeave={() => setHover(null)}>
							<img src={koudetat} alt='koudetat' />
						</a>
						<p
							className={
								inHover === activeUnderTitle.koudetat
									? 'text-show'
									: 'text-hidden'
							}>
							Koudetat
						</p>
					</div>
					<div className='echoes-logo-container'>
						<a
							href='https://www.lereacteur.io/'
							target='_blank'
							rel='noreferrer'
							className='echoes-logo'
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

export default ProjectEchoes;
