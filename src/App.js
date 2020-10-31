import './App.css';
import './Assets/CSS/reset.css';

// Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Import pages
import Homepage from './Containers/Homepage';
import Aboutme from './Containers/Aboutme';
import Contact from './Containers/Contact';
import Skills from './Containers/Skills';
import Projects from './Containers/Projects';

// Icones
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFileAlt, faHome } from '@fortawesome/free-solid-svg-icons';
library.add(faFileAlt, faHome);

function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route path='/about-me'>
						<Aboutme />
					</Route>
					<Route path='/contact'>
						<Contact />
					</Route>
					<Route path='/skills'>
						<Skills />
					</Route>
					<Route path='/projects'>
						<Projects />
					</Route>
					<Route exact path='/'>
						<Homepage />
					</Route>
				</Switch>
				{/* <Footer /> */}
			</Router>
		</div>
	);
}

export default App;
