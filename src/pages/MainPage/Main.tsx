import styles from './Main.module.scss';
import RecommendationContainer from '../../components/recommendation/RecommendationContainer';
import useInput from '../../hooks/useInput';
import useGetList from '../../hooks/useGetList';
import deleteCacheData from '../../utils/helper/deleteCasheData';
import { CACHE_DELETE_TIME } from '../../utils/constants/constants';

// 특정 시간마다 검색어 캐시 삭제
setInterval(deleteCacheData, CACHE_DELETE_TIME);

function Main() {
	const [input, inputValueChange] = useInput('');
	const [data] = useGetList(input);

	return (
		<div className={styles.container}>
			<div className={styles.searchBar}>
				<input
					className={styles.input}
					type="text"
					placeholder="질환명을 입력해주세요."
					onChange={inputValueChange}
					value={input}
				/>
				<button className={styles.btn}>검색</button>
			</div>
			{input !== '' && <RecommendationContainer data={data} />}
		</div>
	);
}

export default Main;
