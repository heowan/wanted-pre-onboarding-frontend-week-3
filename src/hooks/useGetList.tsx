import { useEffect, useState } from 'react';
import updateData from '../utils/helper/updateData';
import { SickType } from '../utils/types/Sick.interface';

function useGetList(input: string) {
	const [data, setData] = useState<SickType[]>([]);

	useEffect(() => {
		if (input !== '') {
			const callApiDelay = setTimeout(() => updateData(input, setData), 400);
			return () => clearTimeout(callApiDelay);
		}
	}, [input]);

	return [data];
}

export default useGetList;
