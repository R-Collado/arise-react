import { useEffect } from 'react';
import { ArtistImages } from '../ArtistImages';
import gsap from 'gsap';
import SplitType from 'split-type';

export const Home = () => {
	useEffect(() => {
		const primaryNavigation = document.querySelectorAll('.primary-navigation ul li') as NodeListOf<HTMLElement>;
		primaryNavigation.forEach((link) => {
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			const splitLink = new SplitType(link);
		});

		gsap.fromTo(
			'.primary-navigation ul li .char',
			{
				yPercent: 150,
			},
			{
				yPercent: 0,
				stagger: 0.02,
				duration: 0.5,
				ease: 'power4.out',
			},
		);
	}, []);

	return (
		<>
			<ArtistImages />
		</>
	);
};
