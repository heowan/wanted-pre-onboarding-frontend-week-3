import { SickType } from '../types/Sick.interface';
import getCacheData from './getCacheData';

async function updateData(input: string, setData: (data: SickType[]) => void) {
	const data = await getCacheData(input);
	setData(data);
}

export default updateData;
