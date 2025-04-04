import arrowLeft from '../../../assets/images/icon-arrow-left.svg';
import deleteIcon from '../../../assets/images/icon-delete.svg';
import archive from '../../../assets/images/icon-archive.svg';
import styles from './NotaBarraSuperior.module.css';

import { UseDispatch } from 'react-redux';
import { AppDispatch } from '../../../store/store';
import { useDispatch } from 'react-redux';
import { volverPantallaAnterior } from '../../../store/reducer';

export default function NotaBarraSuperior({ cancelNota }) {
	const dispatch: AppDispatch = useDispatch();

	function handleGoBackButton() {
		dispatch(volverPantallaAnterior());
	}

	return (
		<nav className={styles.nav}>
			<div className={styles.goBackDiv} onClick={handleGoBackButton}>
				<img src={arrowLeft} alt="go back" className={styles.arrowLeft} />
				<span className={`${styles.goBack} text-preset-5`}>Go Back</span>
			</div>
			<img src={deleteIcon} alt="delete note" className={styles.icon} />
			<img src={archive} alt="archive note" className={styles.icon} />
			<button
				className={`${styles.nav__button} ${styles.cancel} text-preset-5`}
				onClick={cancelNota}
			>
				Cancel
			</button>
			<button className={`${styles.nav__button} ${styles.save} text-preset-5`}>
				Save Note
			</button>
		</nav>
	);
}
