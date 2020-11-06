import React from 'react';
import '../Assets/CSS/Footer.css';

const Footer = () => {
	return (
		<footer>
			<p>
				Made with React by{' '}
				<a
					href='http://tiny.cc/66a1tz'
					target='_blank'
					rel='noreferrer'
					className='footer-link'>
					Marine Le Pennec
				</a>{' '}
				| Homepage background by{' '}
				<a
					href='https://unsplash.com/@dannyhowe'
					target='_blank'
					rel='noreferrer'
					className='footer-link'>
					Danny Howe
				</a>
			</p>
		</footer>
	);
};

export default Footer;
