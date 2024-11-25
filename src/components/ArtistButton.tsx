import { moveActiveArrowOnClick } from '@/animations/activeArrow';

export const ArtistButton = ({ artistName }) => {
	return <button onClick={scrollIntoElement}>{artistName}</button>;
};

const moveActiveArrow = (e: any) => {
	const buttons = document.querySelectorAll('.artist-list li');
	buttons.forEach((button: any) => {
		button.classList.remove('active');
	});

	e.target.parentElement.classList.add('active');

	moveActiveArrowOnClick(e.target);
};

const scrollIntoElement = (e: any) => {
	moveActiveArrow(e);

	// example: juice-wrld
	let artistName = e.target.innerText.toLowerCase().replace(/\s+/g, '-');

	if (artistName === '4batz') {
		artistName = 'four-batz';
	}

	const artistSection = document.querySelector(`#${artistName}`);

	if (artistName === 'smino') {
		artistSection?.scrollIntoView({ behavior: 'smooth', block: 'end' });
	}
	artistSection?.scrollIntoView({ behavior: 'smooth', block: 'center' });
};
