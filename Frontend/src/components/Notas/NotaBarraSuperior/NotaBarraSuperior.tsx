import arrowLeft from '../../../assets/images/icon-arrow-left.svg';
import deleteIcon from '../../../assets/images/icon-delete.svg';
import archive from '../../../assets/images/icon-archive.svg';
import styles from './NotaBarraSuperior.module.css';

export default function NotaBarraSuperior() {
	return (
		<nav className={styles.nav}>
			<div className={styles.goBackDiv}>
				<img src={arrowLeft} alt="go back" className={styles.arrowLeft} />
				<span className={`${styles.goBack} text-preset-5`}>Go Back</span>
			</div>
			<img src={deleteIcon} alt="delete note" className={styles.icon} />
			<img src={archive} alt="archive note" className={styles.icon} />
			<button
				className={`${styles.nav__button} ${styles.cancel} text-preset-5`}
			>
				Cancel
			</button>
			<button className={`${styles.nav__button} ${styles.save} text-preset-5`}>
				Save Note
			</button>
		</nav>
	);
}
