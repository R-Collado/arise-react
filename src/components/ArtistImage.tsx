import { useState } from 'react';
import gsap from 'gsap';

export const ArtistImage = ({ image, imageType }) => {
	const [isFollowingMouse, setIsFollowingMouse] = useState(false);

	const toggleFollowMouse = (e: any) => {
		setIsFollowingMouse(!isFollowingMouse);

		console.log('in');

		const image = e.target;
		gsap.to(image, {
			scale: 1.25,
			duration: 0.15,
		});
	};

	const followMouse = (e: any) => {
		if (!isFollowingMouse) return;
		const image = e.target;
		const parentDiv = image.parentElement;

		console.log('moving');
		// get where the container is on the page
		const boundingRect = parentDiv.getBoundingClientRect();

		// get the x and y position of the mouse relative to the container
		const relX = e.pageX - boundingRect.left;
		const relY = e.pageY - boundingRect.top;

		// calculate the x and y position of the image based on the mouse position (divided by 8 for a smaller movement)
		const x = (relX - parentDiv.offsetWidth / 2) / 8;
		const y = (relY - parentDiv.offsetHeight / 2) / 8;

		gsap.to(image, {
			x: x,
			y: y,
			duration: 0.1,
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
		});
	};
	return (
		<div className={`image image-${imageType}`}>
			<img src={image} alt="" onMouseEnter={toggleFollowMouse} onMouseMove={followMouse} onMouseLeave={mouseLeave} />
		</div>
	);
};
