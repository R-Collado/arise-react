import Lenis from 'lenis';

export const setupLenis = () => {
	// Initialize Lenis
	const lenis = new Lenis({
		autoRaf: true,
	});

	// Listen for the scroll event and log the event data
	lenis.on('scroll', (e) => {
		console.log(e);
	});
};
