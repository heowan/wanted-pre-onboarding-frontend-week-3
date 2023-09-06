import styles from './Main.module.scss';
import RecommendationContainer from '../../components/recommendation/RecommendationContainer';

function Main() {
	return (
		<div className={styles.container}>
			<div className={styles.searchBar}>
				<input className={styles.input} type="text" placeholder="질환명을 입력해주세요." />
				<button className={styles.btn}>검색</button>
			</div>
			<RecommendationContainer />
		</div>
	);
}

export default Main;
