import { useEffect, useState } from 'react';
import { getData } from '../utils/helper/getData';
import { SickType } from '../utils/types/Sick.interface';

function useGetList(input: string) {
	const [data, setData] = useState<SickType[]>([]);

	useEffect(() => {
		const callApiDelay = setTimeout(() => getData(input, setData), 400);
		return () => clearTimeout(callApiDelay);
	}, [input]);

	return [data];
}

export default useGetList;
