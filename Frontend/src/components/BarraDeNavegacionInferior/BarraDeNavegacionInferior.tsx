import casa from '../../assets/images/icon-home.svg';
import buscar from '../../assets/images/icon-search.svg';
import archivado from '../../assets/images/icon-archive.svg';
import tag from '../../assets/images/icon-tag.svg';
import configuracion from '../../assets/images/icon-settings.svg';
import styles from './BarraDeNavegacionInferior.module.css';

export default function BarraDeNavegacionInferior(): React.ReactElement {
	return (
		<nav className={styles.nav}>
			<div className={styles.div}>
				<img src={casa} alt="house icon" />
				<span className={styles.span}>Home</span>
			</div>
			<div className={styles.div}>
				<img src={buscar} alt="search icon" />
				<span className={styles.span}>Search</span>
			</div>
			<div className={styles.div}>
				<img src={archivado} alt="archive icon" />
				<span className={styles.span}>Archived</span>
			</div>
			<div className={styles.div}>
				<img src={tag} alt="tag icon" />
				<span className={styles.span}>Tags</span>
			</div>
			<div className={styles.div}>
				<img src={configuracion} alt="settings icon" />
				<span className={styles.span}>Settings</span>
			</div>
		</nav>
	);
}
