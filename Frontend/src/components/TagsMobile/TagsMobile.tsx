import styles from './TagsMobile.module.css';
import Tags from '../Tags/Tags';
import CirculoNuevaNota from '../CirculoNuevaNota/CirculoNuevaNota';

export default function TagsMobile() {
	return (
		<section className={styles.section}>
			<h3 className={`${styles.h3} text-preset-1`}>Tags</h3>
			<Tags />
			<Tags />
			<Tags />
			<Tags />
			<Tags />
			<Tags />
			<Tags />
			<Tags />
			<CirculoNuevaNota />
		</section>
	);
}
