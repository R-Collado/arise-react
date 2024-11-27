import './App.css';
import { Home } from './components/routes/Home';

import { setupLenis } from './utils/lenis';
import { BrowserRouter, Route, Routes } from 'react-router';

import { ArtistList } from './components/ArtistList';
import { PrimaryNavigation } from './components/PrimaryNavigation';
import { Focus } from './components/routes/Focus';
function App() {
	setupLenis();

	return (
		<>
			<BrowserRouter>
				<PrimaryNavigation />
				<ArtistList />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/focus" element={<Focus />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
