import gsap from 'gsap';

export const ArtistButton = ({ artistName }) => {
	return <button onClick={moveActiveArrow}>{artistName}</button>;
};

const moveActiveArrow = (e: any) => {
	const activeArrow = document.querySelector('.active-arrow');
	const buttons = document.querySelectorAll('.artist-list li');
	buttons.forEach((button: any) => {
		button.classList.remove('active');
	});

	e.target.parentElement.classList.add('active');

	gsap.to(activeArrow, {
		top: e.target.offsetTop,
		duration: 0.5,
	});
};
