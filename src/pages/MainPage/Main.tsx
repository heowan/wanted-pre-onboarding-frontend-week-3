import styles from './Main.module.scss';

function Main() {
	return (
		<div className={styles.container}>
			<div className={styles.searchBar}>
				<input className={styles.input} type="text" placeholder="질환명을 입력해주세요." />
				<button className={styles.btn}>검색</button>
			</div>
			<div>추천검색어</div>
		</div>
	);
}

export default Main;
