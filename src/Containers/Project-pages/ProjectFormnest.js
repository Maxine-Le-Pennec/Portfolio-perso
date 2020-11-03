import React, { useState } from 'react';
import '../../Assets/CSS/ProjectFormnest.css';

// Component(s)
import HomeButton from '../../Components/HomeButton';

// Logo(s)
import reacteur from '../../Assets/img/logos/react_logo.png';

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
	// State
	const [inHoverReacteur, setHoverReacteur] = useState(false);
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
				<div className='formnest-intersection-separator'></div>
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
						<br />
						<br />
						<br />
						<ul>
							<li>
								Frontend: <strong>React-js</strong>.
							</li>{' '}
							<li>
								Backend: <strong>Node.js</strong> and <strong>Express</strong>,{' '}
								<strong>MongoDB</strong>.
							</li>
							<li>
								Deployment: <strong>Netlify</strong> and <strong>Heroku</strong>
								.
							</li>
						</ul>
						<br />
						<br />
					</p>
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

				<section className='formnest-logos-wrapper'>
					<div className='formnest-logos-container'>
						<a
							href='https://www.lereacteur.io/'
							target='_blank'
							rel='noreferrer'
							className='formnest-logos-circle'
							onMouseEnter={() => setHoverReacteur(true)}
							onMouseLeave={() => setHoverReacteur(false)}>
							<img src={reacteur} alt='reacteur' />
						</a>
						<p className={inHoverReacteur ? 'text-show' : 'text-hidden'}>
							Le Reacteur
						</p>
					</div>
				</section>
			</section>
		</div>
	);
};

export default ProjectFormnest;
