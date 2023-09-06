import SearchIcon from '../../assets/search.svg';
import styles from './RecommendationContainer.module.scss';

function RecommendationContainer() {
	return (
		<div className={styles.container}>
			<p className={styles.subTitle}>추천 검색어</p>
			<ul className={styles.list}>
				<li className={styles.listItem}>
					<img src={SearchIcon} className={styles.searchIcon} alt="검색아이콘" />
					<p className={styles.text}>간세포암</p>
				</li>
				<li className={styles.listItem}>
					<img src={SearchIcon} className={styles.searchIcon} alt="검색아이콘" />
					<p className={styles.text}>갑상선암종</p>
				</li>
				<li className={styles.listItem}>
					<img src={SearchIcon} className={styles.searchIcon} alt="검색아이콘" />
					<p className={styles.text}>뼈암</p>
				</li>
				<li className={styles.listItem}>
					<img src={SearchIcon} className={styles.searchIcon} alt="검색아이콘" />
					<p className={styles.text}>구강암</p>
				</li>
			</ul>
		</div>
	);
}

export default RecommendationContainer;
