import { moveActiveArrowOnScroll } from '@/animations/activeArrow';

export const moveActiveArrow = (artistId: string) => {
	const buttons = getArtistButtons();

	buttons.forEach((button: any) => {
		button.classList.remove('active');

		if (button.dataset.artist === artistId) {
			button.classList.add('active');
			moveActiveArrowOnScroll(button);
		}
	});
};

const getArtistButtons = () => {
	return document.querySelectorAll('.artist-list li') as NodeListOf<HTMLElement>;
};
