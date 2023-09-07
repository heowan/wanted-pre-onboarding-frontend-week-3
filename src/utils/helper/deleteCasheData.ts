import { CACHE_NAME } from '../constants/constants';

function deleteCacheData() {
	caches.open(CACHE_NAME).then(cache => {
		return cache
			.keys()
			.then(cacheKeys => {
				return Promise.all(
					cacheKeys.map(cacheKey => {
						return cache.delete(cacheKey);
					}),
				);
			})
			.then(() => {
				console.info('캐시 데이터 삭제 완료');
			})
			.catch(error => {
				console.info('캐시 데이터 삭제 중 오류 발생:', error);
			});
	});
}

export default deleteCacheData;
