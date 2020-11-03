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
// Import component(s)
import HomeButton from '../../Components/HomeButton';

const ProjectEchoes = () => {
	// States
	const [inHoverEchoes, setHoverEchoes] = useState(false);
	const [inHoverKoudetat, setHoverKoudetat] = useState(false);
	const [inHoverReacteur, setHoverReacteur] = useState(false);

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
					<div className='echoes-logos-container'>
						<a
							href='https://echoes.studio/'
							target='_blank'
							rel='noreferrer'
							className='echoes-logos-circle'
							onMouseEnter={() => setHoverEchoes(true)}
							onMouseLeave={() => setHoverEchoes(false)}>
							<img src={echoes} alt='echoes' />
						</a>
						<p className={inHoverEchoes ? 'text-show' : 'text-hidden'}>
							Echoes
						</p>
					</div>

					<div className='echoes-logos-container'>
						<a
							href='https://www.koudetat.co/'
							target='_blank'
							rel='noreferrer'
							className='echoes-logos-circle'
							onMouseEnter={() => setHoverKoudetat(true)}
							onMouseLeave={() => setHoverKoudetat(false)}>
							<img src={koudetat} alt='koudetat' />
						</a>
						<p className={inHoverKoudetat ? 'text-show' : 'text-hidden'}>
							Koudetat
						</p>
					</div>
					<div className='echoes-logos-container'>
						<a
							href='https://www.lereacteur.io/'
							target='_blank'
							rel='noreferrer'
							className='echoes-logos-circle'
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

export default ProjectEchoes;
