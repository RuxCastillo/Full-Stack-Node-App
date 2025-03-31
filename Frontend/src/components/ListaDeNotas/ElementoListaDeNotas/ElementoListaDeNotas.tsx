import styles from '../ListaDeNotas.module.css';
import { UseSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../../store/store';
import { cambiarPantalla } from '../../../store/reducer';

export default function ElementoListaDeNotas() {
	const dispatch: AppDispatch = useDispatch();

	function handleClickInElemento() {
		dispatch(cambiarPantalla('nota abierta'));
	}

	return (
		<div className={styles.nota} onClick={handleClickInElemento}>
			<p className={`${styles.nota__titulo} text-preset-3`}>
				React Performance Optimization
			</p>
			<div className={`${styles.nota__tags} text-preset-6`}>
				<span className={styles.tag}>Dev</span>
				<span className={styles.tag}>React</span>
			</div>
			<span className={`${styles.fecha} text-preset-6`}>29 Oct 2024</span>
		</div>
	);
}
