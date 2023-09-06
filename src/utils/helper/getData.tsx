import { getRecommendationList } from '../../api/Api';
import sliceData from '../helper/sliceData';
import { SickType } from '../types/Sick.interface';
import { MAX_LIST_NUM } from '../constants/constants';

export const getData = (input: string, setData: (data: SickType[]) => void) => {
	getRecommendationList(input)
		.then(res => {
			setData(sliceData(res.data, MAX_LIST_NUM));
		})
		.catch(error => console.info(error.message));
};
