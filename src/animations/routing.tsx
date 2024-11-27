import gsap from 'gsap';

export const enterFocusComponent = () => {
	const activeLink = document.querySelector('.primary-navigation li.active');
	activeLink?.classList.remove('active');

	gsap.to('.primary-navigation ul', {
		duration: 0.75,
		x: '-50%',
		delay: 0.001,
	});

	const homeNavLink = document.querySelector('.primary-navigation a.hidden    ') as HTMLAnchorElement;
	gsap.to(homeNavLink, {
		opacity: 1,
		display: 'inline-block',
	});
};
