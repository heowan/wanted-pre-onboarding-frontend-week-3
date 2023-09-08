import { URL } from '../utils/constants/constants';

export const getRecommendationList = async (query: string) => {
	const url = `${URL.BASEURL}/?q=${query}`;

	console.info('calling api');

	try {
		const response = await fetch(url);
		const jsonData = await response.json();

		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		return jsonData;
	} catch (error) {
		console.error('Error:', error);
		throw error;
	}
};
