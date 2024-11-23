import { useEffect } from 'react';
import ActiveArrow from '../assets/active-arrow.svg?react';

import { ArtistButton } from './ArtistButton';

import gsap from 'gsap';

const artistNames = ['Polo G', 'Juice WRLD', '4batz', 'Scorey', 'Sleepy Hallow', 'Post Malone'];

export const ArtistList = () => {
	useEffect(() => {
		const firstArtistButton = document.querySelector('.artist-list button') as HTMLButtonElement;
		gsap.set('.active-arrow', {
			top: firstArtistButton?.offsetTop,
		});
	});

	return (
		<section className="artist-list-section">
			<ul className="artist-list">
				<div className="active-arrow">
					<ActiveArrow />
				</div>
				<ul className="artist-list">
					{artistNames.map((artistName: string, idx: number) => (
						<li key={artistName} className={idx === 0 ? 'active' : ''}>
							<ArtistButton artistName={artistName} />
						</li>
					))}
				</ul>
			</ul>
		</section>
	);
};
