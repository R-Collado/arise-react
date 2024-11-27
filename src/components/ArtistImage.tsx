import { useState } from 'react';
import gsap from 'gsap';
import { useNavigate } from 'react-router';
import { animateLeaveArtistsSection } from '@/animations/routing';

export const ArtistImage = ({ image, imageType }) => {
	const [isFollowingMouse, setIsFollowingMouse] = useState(false);
	const navigate = useNavigate();

	const toggleFollowMouse = (e: any) => {
		setIsFollowingMouse(!isFollowingMouse);

		const image = e.target;
		gsap.to(image, {
			scale: 1.25,
			duration: 0.15,
		});
	};

	const mouseLeave = (e: any) => {
		setIsFollowingMouse(false);

		const image = e.target;

		gsap.to(image, {
			x: 0,
			y: 0,
			scale: 1,
			duration: 0.5,
			ease: 'bounce.out',
		});
	};

	// const followMouse = (e: any) => {
	// 	if (!isFollowingMouse) return;
	// 	const image = e.target;
	// 	const parentDiv = image.parentElement;

	// 	// get where the container is on the page
	// 	const boundingRect = parentDiv.getBoundingClientRect();

	// 	// get the x and y position of the mouse relative to the container
	// 	const relX = e.pageX - boundingRect.left;
	// 	const relY = e.pageY - boundingRect.top;

	// 	// calculate the x and y position of the image based on the mouse position (divided by 8 for a smaller movement)
	// 	const x = (relX - parentDiv.offsetWidth / 2) / 8;
	// 	const y = (relY - parentDiv.offsetHeight / 2) / 8;

	// 	gsap.to(image, {
	// 		x: x,
	// 		y: y,
	// 		duration: 0.1,
	// 	});
	// };

	// const mouseLeave = (e: any) => {
	// 	setIsFollowingMouse(false);

	// 	const image = e.target;

	// 	gsap.to(image, {
	// 		x: 0,
	// 		y: 0,
	// 		scale: 1,
	// 		duration: 0.5,
	// 		ease: 'bounce.out',
	// 	});
	// };

	const imageSrc = `/src/assets/artist-images/${image}`;

	return (
		<div className={`container image-${imageType}`}>
			<div className={`image `}>
				<img
					src={imageSrc}
					alt=""
					onMouseEnter={toggleFollowMouse}
					onMouseLeave={mouseLeave}
					onClick={() => animateLeaveArtistsSection(navigate('/focus'))}
				/>
			</div>
		</div>
	);
};
