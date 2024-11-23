import polog1 from '../assets/artist-images/polo-g/image-1.png';
import polog2 from '../assets/artist-images/polo-g/image-2.png';
import polog3 from '../assets/artist-images/polo-g/image-3.png';
import polog4 from '../assets/artist-images/polo-g/image-4.png';
import polog5 from '../assets/artist-images/polo-g/image-5.png';
import polog6 from '../assets/artist-images/polo-g/image-6.png';
import { ArtistImage } from './ArtistImage';

export const ArtistImages = () => {
	return (
		<section className="artist-images">
			<ArtistImage image={polog1} imageType={'landscape'} />
			<ArtistImage image={polog2} imageType={'square'} />
			<ArtistImage image={polog3} imageType={'landscape'} />
			<ArtistImage image={polog4} imageType={'portrait'} />
			<ArtistImage image={polog5} imageType={'landscape'} />
			<ArtistImage image={polog6} imageType={'square'} />
		</section>
	);
};
