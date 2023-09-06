import styles from './RecommendationContainer.module.scss';
import RecommendationList from './RecommendationList';
import { SickType } from '../../utils/types/Sick.interface';

const data: SickType[] = [
	{
		sickCd: 'A06',
		sickNm: '아메바증',
	},
	{
		sickCd: 'A31',
		sickNm: '기타 형태의 마이코박테리아에 의한 감염',
	},
	{
		sickCd: 'A32',
		sickNm: '리스테리아병',
	},
	{
		sickCd: 'A33',
		sickNm: '신생아 파상풍',
	},
	{
		sickCd: 'A36',
		sickNm: '디프테리아',
	},
	{
		sickCd: 'A43',
		sickNm: '노카르디아증',
	},
];

function RecommendationContainer() {
	return (
		<div className={styles.container}>
			<p className={styles.subTitle}>추천 검색어</p>
			<ul className={styles.list}>
				{data.map(listItem => (
					<RecommendationList key={listItem.sickCd} listItem={listItem} />
				))}
			</ul>
		</div>
	);
}

export default RecommendationContainer;
