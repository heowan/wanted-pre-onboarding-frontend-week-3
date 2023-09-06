import { SickType } from '../types/Sick.interface';

function sliceData(data: SickType[], num: number) {
	const newData = data.slice(0, num);
	return newData;
}

export default sliceData;
