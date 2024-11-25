import gsap from 'gsap';

// property created to control when the arrow can be moved by scrolling
// done this way so the arrow doesn't move around when scrolling by clicking on the buttons
let isMovableOnScroll = false;

export const moveActiveArrowOnScroll = (button) => {
	if (!isMovableOnScroll) return;

	const activeArrow = getActiveArrow();

	gsap.to(activeArrow, {
		top: button.offsetTop,
		duration: 0.5,
	});
};

export const moveActiveArrowOnClick = (button) => {
	isMovableOnScroll = false;
	const arrow = getActiveArrow();

	gsap.to(arrow, {
		top: button.offsetTop,
		duration: 0.5,
		onComplete: () => {
			setTimeout(() => {
				isMovableOnScroll = true;
			}, 1000);
		},
	});
};

export const moveActiveArrowOnLoad = () => {
	const button = document.querySelector('.artist-list li.active') as HTMLElement;

	gsap.fromTo(
		'.active-arrow',
		{
			top: -150,
		},
		{
			top: button?.offsetTop,
			duration: 0.5,
			delay: 0.5,
			onComplete: () => {
				isMovableOnScroll = true;
			},
		},
	);
};

const getActiveArrow = () => {
	return document.querySelector('.active-arrow') as HTMLElement;
};
