import styles from './Notas.module.css';
import arrowLeft from '../../assets/images/icon-arrow-left.svg';
import deleteIcon from '../../assets/images/icon-delete.svg';
import archive from '../../assets/images/icon-archive.svg';

export default function Notas() {
	return (
		<section className={styles.nota}>
			<nav className={styles.nav}>
				<img src={arrowLeft} alt="go back" className={styles.arrowLeft} />
				<span className={`${styles.goBack} text-preset-5`}>Go Back</span>
				<img src={deleteIcon} alt="delete note" className={styles.icon} />
				<img src={archive} alt="archive note" className={styles.icon} />
				<button
					className={`${styles.nav__button} ${styles.cancel} text-preset-5`}
				>
					Cancel
				</button>
				<button
					className={`${styles.nav__button} ${styles.save} text-preset-5`}
				>
					Save Note
				</button>
			</nav>
		</section>
	);
}
