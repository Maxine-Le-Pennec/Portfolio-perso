import React, { useState } from 'react';
import '../Assets/CSS/Contact.css';

// Component(s)
import HomeButton from '../Components/HomeButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
	const [inHoverMail, setHoverMail] = useState(false);
	const [inHoverPhone, setHoverPhone] = useState(false);

	// ------------------------------------------------------------------------------
	return (
		<main className='contact-main-wrapper'>
			<HomeButton />
			<section className='contact-circle-section'>
				<div className='contact-circle'>
					<h2>Contact</h2>
					<div> </div>
					<p>I'm social!</p>
				</div>
			</section>
			<section className='contact-icons-section'>
				<div
					onMouseEnter={() => setHoverPhone(true)}
					onMouseLeave={() => setHoverPhone(false)}>
					<FontAwesomeIcon icon='phone-square-alt' size='7x' color='white' />
					<p
						className={
							inHoverPhone ? 'number-hidden-false' : 'number-hidden-true'
						}>
						06-58-55-40-15
					</p>
				</div>
				<div
					onMouseEnter={() => setHoverMail(true)}
					onMouseLeave={() => setHoverMail(false)}>
					<a
						href='mailto:lepennec.marine@gmail.com'
						target='_blank'
						rel='noreferrer'
						className='envelope-icon'>
						<FontAwesomeIcon icon='envelope' size='7x' color='white' />
					</a>
					<p className={inHoverMail ? 'mail-hidden-false' : 'mail-hidden-true'}>
						lepennec.marine@gmail.com
					</p>
				</div>

				<a
					href='https://tinyurl.com/y3gt3vg6'
					target='_blank'
					rel='noreferrer'
					className='linkedin-icon'>
					<FontAwesomeIcon icon={['fab', 'linkedin']} size='7x' color='white' />
				</a>
			</section>
		</main>
	);
};

export default Contact;
