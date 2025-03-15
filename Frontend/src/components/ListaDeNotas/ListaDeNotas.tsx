import styles from './ListaDeNotas.module.css';
import plus from '../../assets/images/icon-plus.svg';

export default function ListaDeNotas(): React.ReactElement {
	return (
		<section className={styles.section}>
			<h1 className={`${styles.h1} text-preset-1`}>All Notes</h1>
			<button className={`${styles.button} text-preset-4`}>
				+ Create New Note
			</button>
			<div className={styles.nota}>
				<p className={`${styles.nota__titulo} text-preset-3`}>
					React Performance Optimization
				</p>
				<div className={`${styles.nota__tags} text-preset-6`}>
					<span className={styles.tag}>Dev</span>
					<span className={styles.tag}>React</span>
				</div>
				<span className={`${styles.fecha} text-preset-6`}>29 Oct 2024</span>
			</div>
			<div className={styles.nota}>
				<p className={`${styles.nota__titulo} text-preset-3`}>
					React Performance Optimization
				</p>
				<div className={`${styles.nota__tags} text-preset-6`}>
					<span className={styles.tag}>Dev</span>
					<span className={styles.tag}>React</span>
				</div>
				<span className={`${styles.fecha} text-preset-6`}>29 Oct 2024</span>
			</div>
			<div className={styles.nota}>
				<p className={`${styles.nota__titulo} text-preset-3`}>
					React Performance Optimization
				</p>
				<div className={`${styles.nota__tags} text-preset-6`}>
					<span className={styles.tag}>Dev</span>
					<span className={styles.tag}>React</span>
				</div>
				<span className={`${styles.fecha} text-preset-6`}>29 Oct 2024</span>
			</div>
			<div className={styles.nota}>
				<p className={`${styles.nota__titulo} text-preset-3`}>
					React Performance Optimization
				</p>
				<div className={`${styles.nota__tags} text-preset-6`}>
					<span className={styles.tag}>Dev</span>
					<span className={styles.tag}>React</span>
				</div>
				<span className={`${styles.fecha} text-preset-6`}>29 Oct 2024</span>
			</div>
			<div className={styles.nota}>
				<p className={`${styles.nota__titulo} text-preset-3`}>
					React Performance Optimization
				</p>
				<div className={`${styles.nota__tags} text-preset-6`}>
					<span className={styles.tag}>Dev</span>
					<span className={styles.tag}>React</span>
				</div>
				<span className={`${styles.fecha} text-preset-6`}>29 Oct 2024</span>
			</div>
			<div className={styles.nota}>
				<p className={`${styles.nota__titulo} text-preset-3`}>
					React Performance Optimization
				</p>
				<div className={`${styles.nota__tags} text-preset-6`}>
					<span className={styles.tag}>Dev</span>
					<span className={styles.tag}>React</span>
				</div>
				<span className={`${styles.fecha} text-preset-6`}>29 Oct 2024</span>
			</div>
			<div className={styles.nota}>
				<p className={`${styles.nota__titulo} text-preset-3`}>
					React Performance Optimization
				</p>
				<div className={`${styles.nota__tags} text-preset-6`}>
					<span className={styles.tag}>Dev</span>
					<span className={styles.tag}>React</span>
				</div>
				<span className={`${styles.fecha} text-preset-6`}>29 Oct 2024</span>
			</div>
			<div className={styles.nota}>
				<p className={`${styles.nota__titulo} text-preset-3`}>
					React Performance Optimization
				</p>
				<div className={`${styles.nota__tags} text-preset-6`}>
					<span className={styles.tag}>Dev</span>
					<span className={styles.tag}>React</span>
				</div>
				<span className={`${styles.fecha} text-preset-6`}>29 Oct 2024</span>
			</div>
			<div className={styles.circulo}>
				<img className={styles.plus} src={plus} alt="" />
			</div>
		</section>
	);
}
