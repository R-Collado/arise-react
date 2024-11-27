import gsap from 'gsap';
import { useEffect } from 'react';
import SplitType from 'split-type';

export const PrimaryNavigation = () => {
	useEffect(() => {
		const firstLink = document.querySelector('.primary-navigation a') as HTMLAnchorElement;
		const splitLink = new SplitType(firstLink);

		const chars = splitLink.chars;

		gsap.fromTo(
			chars,
			{
				y: 150,
			},
			{
				y: 0,
				stagger: 0.02,
				duration: 0.5,
				ease: 'power4.out',
			},
		);
	});

	const animateTransitionToHomeSection = (event) => {
		event.preventDefault();
		const indexLink = document.querySelector('.primary-navigation a[data-value="home"]') as HTMLAnchorElement;
		const primaryNavigation = document.querySelector('.primary-navigation') as HTMLElement;
		const chars = primaryNavigation.querySelectorAll('.char') as NodeListOf<HTMLElement>;

		gsap.to(indexLink, {
			y: 150,
			duration: 0.5,
			ease: 'power4.in',
		});

		gsap.to(chars, {
			y: 150,
			duration: 0.5,
			ease: 'power4.in',
			delay: 0.1,
			stagger: 0.02,
			onComplete: () => {
				window.location.href = '/';
			},
		});
	};

	return (
		<nav className="primary-navigation">
			<div className="link-container">
				<a href="/" className="hidden" data-value="home" onClick={animateTransitionToHomeSection}>
					Index
				</a>
			</div>
			<ul>
				<li className="active" onClick={animateTransitionToHomeSection}>
					<a href="/">Artists,</a>
				</li>
				<li>
					<a href="#">About,</a>
				</li>
				<li>
					<a href="#">Contact</a>
				</li>
			</ul>
		</nav>
	);
};
