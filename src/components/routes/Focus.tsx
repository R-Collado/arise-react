import { enterFocusComponent } from '@/animations/routing';
import { useEffect } from 'react';

export const Focus = () => {
	useEffect(() => {
		enterFocusComponent();
	}, []);

	return <h1>Focus</h1>;
};
