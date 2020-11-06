import React, { useState } from 'react';
import '../../Assets/CSS/ProjectFormnest.css';

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
import mdb from '../../Assets/img/logos/MDB.png';

// Carousel
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import main from '../../Assets/img/my_projects/carousel_formnest/main.png';
import newform from '../../Assets/img/my_projects/carousel_formnest/newform.png';
import reponsespage from '../../Assets/img/my_projects/carousel_formnest/reponses.png';
import formpage from '../../Assets/img/my_projects/carousel_formnest/formulaireintro.png';
import text from '../../Assets/img/my_projects/carousel_formnest/text.png';
import note from '../../Assets/img/my_projects/carousel_formnest/notes.png';

const ProjectFormnest = () => {
	const activeUnderTitle = {
		reacteur: 'REACTEUR',
		react: 'REACT',
		css: 'CSS',
		html: 'HTML',
		node: 'NODE',
		heroku: 'HEROKU',
		netlify: 'NETFLIFY',
		mdb: 'MDB',
	};

	// State
	const [inHover, setHover] = useState(null);

	return (
		<div className='formnest-project-wrapper'>
			<HomeButton />

			<div className='header-wrapper'>
				<h2>FORMNEST</h2>
				<div></div>
			</div>

			<section className='formnest-info-wrapper'>
				<section className='formnest-picture-wrapper'>
					<Carousel showThumbs={true}>
						<div>
							<img src={main} alt='main page formnest' />
							<p className='legend'>Main page</p>
						</div>
						<div>
							<img src={newform} alt='new form' />
							<p className='legend'>Creation of a new form</p>
						</div>
						<div>
							<img src={reponsespage} alt='answers page' />
							<p className='legend'>Answers page</p>
						</div>
						<div>
							<img src={formpage} alt='form page' />
							<p className='legend'>Answering start page</p>
						</div>
						<div>
							<img src={text} alt='text answer' />
							<p className='legend'>Text answer</p>
						</div>
						<div>
							<img src={note} alt='note answer' />
							<p className='legend'>Grade answer</p>
						</div>
					</Carousel>
				</section>
				<div className='intersection-separator'> </div>
				<section className='formnest-despription-wrapper'>
					<p style={{ fontWeight: 'bold', textAlign: 'center' }}>
						<strong>This is the project that allowed me to graduate!</strong>
					</p>
					<br />
					<p>
						The generator allows you to create new forms by adding the desired
						number of questions and choosing whether you want a "text" or "grade
						type" response.
						<br />
						<br />
						It is then possible to respond directly to them and save the
						responses in the "edit" mode of each form. <br />
						The "Answer" section is accessible from editing the form and
						contains all the users' answers. Even if the questions are modified
						or deleted, they are always accessible with the associated answers
						in this part. <br />
						Each form is editable. The red questions are text type and the
						yellow ones are grade type. The user has the option to delete them
						or change their order.
					</p>
				</section>
				<section className='formnest-stacks-wrapper'>
					<h2>Stack</h2>
					<div className='stack-separator'></div>
					<div className='formnest-stacks-container'>
						<div className='formnest-stack-container'>
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
						</div>
					</div>
				</section>
				<section className='project-formnest-wrapper'>
					<div className='project-formnest-link-container'>
						<p>
							You can see the project{' '}
							<a
								href='https://marine-lepennec-formnest.netlify.app/'
								target='_blank'
								rel='noreferrer'
								className='project-formnest-link'>
								here
							</a>
						</p>
					</div>
				</section>

				<section className='formnest-logo-wrapper'>
					<div className='formnest-logo-container'>
						<a
							href='https://www.lereacteur.io/'
							target='_blank'
							rel='noreferrer'
							className='formnest-reacteur-link-container'
							onMouseEnter={() => setHover(activeUnderTitle.reacteur)}
							onMouseLeave={() => setHover(null)}>
							<img src={reacteur} alt='reacteur' className='formnest-logo' />
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

export default ProjectFormnest;
