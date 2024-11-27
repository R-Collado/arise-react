import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import artists from '../data/artists.json';

import { ArtistImage } from './ArtistImage';
import { moveActiveArrow } from '../utils/moveArrow';

export const ArtistImages = () => {
	gsap.registerPlugin(ScrollTrigger);

	useEffect(() => {
		const images = document.querySelectorAll('.image');
		const artistNumbers = document.querySelectorAll('.artist-number span');
		const artistSections = document.querySelectorAll('.artist-images');

		gsap.fromTo(
			images,
			{
				y: 500,
			},
			{
				y: 0,
				opacity: 1,
				duration: 0.75,
				stagger: 0.075,
				ease: 'power4.out',
			},
		);

		gsap.fromTo(
			artistNumbers,
			{
				y: 1000,
			},
			{
				y: 0,
				duration: 0.75,
				stagger: 0.75,
				ease: 'power4.out',
				delay: 0.25,
			},
		);

		artistSections.forEach((section) => {
			gsap.to(section, {
				scrollTrigger: {
					trigger: section,
					start: '30% 60%',
					onEnter: () => {
						const artistId = section.id;
						moveActiveArrow(artistId);
					},
				},
			});

			gsap.to(section, {
				scrollTrigger: {
					trigger: section,
					start: 'center center',
					onLeaveBack: () => {
						const artistId = section.id;
						moveActiveArrow(artistId);
					},
				},
			});
		});
	});

	return (
		<section className="artists">
			{artists.map((artist, idx) => {
				return (
					<section className="artist-images" id={artist.path} key={artist.name}>
						<h2 className="artist-number" data-idx={idx + 1}>
							<span>0{idx + 1}</span>
						</h2>
						{artist.images.map((image, index) => (
							<ArtistImage
								key={index}
								image={`${artist.path}/${image.src}`}
								alt={artist.name}
								imageType={image.size}
								artistNumber={image.hasNumber && idx + 1}
								artistPath={artist.path}
							/>
						))}
					</section>
				);
			})}
		</section>
	);
};
