import { useEffect } from 'react';
import ActiveArrow from '../assets/active-arrow.svg?react';

import { ArtistButton } from './ArtistButton';

import artists from '../data/artists.json';

import gsap from 'gsap';
import { moveActiveArrowOnLoad } from '@/animations/activeArrow';

export const ArtistList = () => {
	useEffect(() => {
		const artistButtons = document.querySelectorAll('.artist-list button') as NodeListOf<HTMLButtonElement>;
		moveActiveArrowOnLoad();

		gsap.fromTo(
			artistButtons,
			{
				y: 50,
			},
			{
				y: 0,
				stagger: 0.1,
				duration: 0.5,
				delay: 0.25,
			},
		);
	});

	return (
		<section className="artist-list-section">
			<ul className="artist-list">
				<div className="active-arrow">
					<ActiveArrow />
				</div>
				{artists.map((artist: any, idx: number) => (
					<li key={artist.path} className={idx === 0 ? 'active' : ''} data-artist={artist.path}>
						<ArtistButton artistName={artist.name} />
					</li>
				))}
			</ul>
		</section>
	);
};
