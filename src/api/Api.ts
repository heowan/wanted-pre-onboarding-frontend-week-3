import axios from 'axios';
import { URL } from '../utils/constants/constants';

const instance = axios.create({
	baseURL: URL.BASEURL,
});

export const getRecommendationList = async (query: string) => {
	console.info('calling api');
	const response = await instance.get(`/`, {
		params: {
			q: query,
		},
	});
	return response;
};
