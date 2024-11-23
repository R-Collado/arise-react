import './App.css';
import { ArtistImages } from './components/ArtistImages';
import { ArtistList } from './components/ArtistList';
import { PrimaryNavigation } from './components/PrimaryNavigation';

function App() {
	return (
		<>
			<PrimaryNavigation />
			<div className="artists-container">
				<ArtistImages />
				<ArtistList />
			</div>
		</>
	);
}

export default App;
