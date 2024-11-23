import polog1 from '../assets/artist-images/polo-g/image-1.png';
import polog2 from '../assets/artist-images/polo-g/image-2.png';
import polog3 from '../assets/artist-images/polo-g/image-3.png';
import polog4 from '../assets/artist-images/polo-g/image-4.png';
import polog5 from '../assets/artist-images/polo-g/image-5.png';
import polog6 from '../assets/artist-images/polo-g/image-6.png';

export const ArtistImages = () => {
	return (
		<section className="artist-images">
			<img className="image image-landscape" src={polog1} />
			<img className="image image-square" src={polog2} />
			<img className="image image-landscape" src={polog3} />
			<img className="image image-portrait" src={polog4} />
			<img className="image image-landscape" src={polog5} />
			<img className="image image-square" src={polog6} />
		</section>
	);
};
