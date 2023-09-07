import { getRecommendationList } from '../../api/api';
import sliceData from './sliceData';
import { MAX_LIST_NUM, CACHE_NAME } from '../constants/constants';

async function getCacheData(query: string) {
	const cacheStorage = await caches.open(CACHE_NAME);
	const responsedCache = await cacheStorage.match(query);

	if (responsedCache) {
		const cacheData = await responsedCache.json();

		return cacheData;
	} else {
		const newData = await getRecommendationList(query);
		const slicedData = sliceData(newData, MAX_LIST_NUM);

		cacheStorage.put(query, new Response(JSON.stringify(slicedData)));

		return slicedData;
	}
}

export default getCacheData;
