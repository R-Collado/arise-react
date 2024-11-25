import './App.css';
import { ArtistImages } from './components/ArtistImages';
import { ArtistList } from './components/ArtistList';
import { PrimaryNavigation } from './components/PrimaryNavigation';
import { setupLenis } from './utils/lenis';

function App() {
	setupLenis();

	return (
		<>
			<PrimaryNavigation />
			<ArtistImages />
			<ArtistList />
		</>
	);
}

export default App;
