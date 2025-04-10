import casa from '../../assets/images/icon-home.svg';
import buscar from '../../assets/images/icon-search.svg';
import archivado from '../../assets/images/icon-archive.svg';
import tag from '../../assets/images/icon-tag.svg';
import configuracion from '../../assets/images/icon-settings.svg';
import styles from './BarraDeNavegacionInferior.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import { cambiarPantalla } from '../../store/reducer';

export default function BarraDeNavegacionInferior(): React.ReactElement {
	const state = useSelector((state: RootState) => state.nota);
	const dispatch: AppDispatch = useDispatch();

	function changePantalla(str: string) {
		dispatch(cambiarPantalla(str));
	}

	return (
		<nav className={styles.nav}>
			<div className={styles.div} onClick={() => changePantalla('home')}>
				<img src={casa} alt="house icon" />
				<span className={styles.span}>Home</span>
			</div>
			<div className={styles.div} onClick={() => changePantalla('search')}>
				<img src={buscar} alt="search icon" />
				<span className={styles.span}>Search</span>
			</div>
			<div className={styles.div} onClick={() => changePantalla('archived')}>
				<img src={archivado} alt="archive icon" />
				<span className={styles.span}>Archived</span>
			</div>
			<div className={styles.div} onClick={() => changePantalla('tags')}>
				<img src={tag} alt="tag icon" />
				<span className={styles.span}>Tags</span>
			</div>
			<div className={styles.div} onClick={() => changePantalla('settings')}>
				<img src={configuracion} alt="settings icon" />
				<span className={styles.span}>Settings</span>
			</div>
		</nav>
	);
}
