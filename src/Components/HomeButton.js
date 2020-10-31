import React from 'react';
import '../Assets/CSS/HomeButton.css';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HomeButton = () => {
	let history = useHistory();
	return (
		<button type='button' className='home' onClick={() => history.push('/')}>
			<FontAwesomeIcon icon='home' size='2x' color='white' />
		</button>
	);
};

export default HomeButton;
