import { useEffect } from 'react';
import gsap from 'gsap';

import artists from '../data/artists.json';

import { ArtistImage } from './ArtistImage';

export const ArtistImages = () => {
	useEffect(() => {
		const images = document.querySelectorAll('.image');
		const artistNumbers = document.querySelectorAll('.artist-number span');

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
				stagger: 0.075,
				ease: 'power4.out',
				delay: 0.25,
			},
		);
	});

	return (
		<section className="artists">
			{artists.map((artist, idx) => {
				return (
					<section className="artist-images" key={artist.name}>
						<h2 className="artist-number" data-idx={idx}>
							<span>0{idx + 1}</span>
						</h2>

						{artist.images.map((image, index) => (
							<ArtistImage
								key={index}
								image={`${artist.path}/${image.src}`}
								alt={artist.name}
								imageType={image.size}
								artistNumber={image.hasNumber && idx + 1}
							/>
						))}
					</section>
				);
			})}
		</section>
	);
};
