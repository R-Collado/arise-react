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

	return (
		<nav className="primary-navigation">
			<div className="link-container">
				<a href="/" className="hidden">
					Index
				</a>
			</div>
			<ul>
				<li className="active">
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
