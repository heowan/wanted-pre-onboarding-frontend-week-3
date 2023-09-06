import { useEffect, useState } from 'react';
import { getRecommendationList } from '../api/Api';
import sliceData from '../utils/helper/sliceData';
import { MAX_LIST_NUM } from '../utils/constants/constants';

function useGetList(input: string) {
	const [data, setData] = useState([]);

	useEffect(() => {
		getRecommendationList(input)
			.then(res => {
				setData(res.data);
			})
			.catch(error => console.log(error));
	}, [input, setData]);

	return [sliceData(data, MAX_LIST_NUM)];
}

export default useGetList;
