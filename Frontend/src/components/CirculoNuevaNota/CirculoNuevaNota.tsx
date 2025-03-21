import styles from './CirculoNuevaNota.module.css';
import plus from '../../assets/images/icon-plus.svg';

export default function CirculoNuevaNota() {
	return (
		<div className={styles.circulo}>
			<img className={styles.plus} src={plus} alt="" />
		</div>
	);
}
