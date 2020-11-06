import React from 'react';
import '../Assets/CSS/Aboutme.css';

// Composant(s)
import HomeButton from '../Components/HomeButton';
import Footer from '../Components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Aboutme = () => {
	return (
		<div className='global-aboutme-container'>
			<HomeButton />
			<div>
				<section className='presentation-section'>
					<div className='presentation-container'>
						<img
							src='https://res.cloudinary.com/dt3dcdlk6/image/upload/v1604155427/20180625_113256_m3hnng.jpg'
							alt='portrait'
							className='circle'></img>
						<h2>
							Marine
							<br />
							LE PENNEC
						</h2>
						<h3>Web developer | React.js</h3>
					</div>
				</section>
				<section className='aboutme-section'>
					<div className='aboutme-container'>
						<h2>About me</h2>
						<div className='aboutme-text-container'>
							<p>
								As a child, I was a follower of "why?" and "how does it work?".{' '}
								<br />
								<br />
								As a teenager, I loved hacking around on computers and exploring
								the internet.
								<br />
								<br />
								After 6 years of my life in the recording and video game
								industry, I finally realized that I finally found it fun to keep
								asking lots of questions, tweaking things and feeling the
								victory of solving problems. So I said bye-bye to my vinyl boxes
								and the latest trendy AAAs and I decided to convert myself into
								a web developer!
								<br />
								<br />
								<br />
								... In short, my passion is to get myself into professions where
								you have the impression of never knowing everything.
							</p>
							<div className='CV-container'>
								<p>My CV is right there</p>
								<a
									href='https://tinyurl.com/y3jyk6h6'
									target='_blank'
									rel='noreferrer'
									className='CV-link'>
									<FontAwesomeIcon icon='file-alt' size='3x' />
								</a>
							</div>
						</div>
					</div>
				</section>
			</div>
			<Footer />
		</div>
	);
};

export default Aboutme;
