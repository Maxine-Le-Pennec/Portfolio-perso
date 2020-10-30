import React from 'react';
import '../Assets/CSS/Footer.css';

const Footer = () => {
	return (
		<footer>
			<p>
				Made with React by{' '}
				<a
					href='https://www.linkedin.com/in/mlepennec/'
					className='footer-link'>
					Marine Le Pennec
				</a>{' '}
				| Background by{' '}
				<a
					href='https://unsplash.com/photos/vESk46kcm9g?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink'
					className='footer-link'>
					Danny Howe
				</a>
			</p>
		</footer>
	);
};

export default Footer;
