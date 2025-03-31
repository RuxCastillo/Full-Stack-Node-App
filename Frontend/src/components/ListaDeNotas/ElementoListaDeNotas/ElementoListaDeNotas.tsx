import styles from '../ListaDeNotas.module.css';
import { UseSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../../store/store';
import { cambiarPantalla } from '../../../store/reducer';
import { Nota } from '../../../store/reducer';

interface Props {
	nota: Nota;
}

export default function ElementoListaDeNotas({ nota }: Props) {
	const dispatch: AppDispatch = useDispatch();

	function handleClickInElemento() {
		dispatch(cambiarPantalla('nota abierta'));
	}
	console.log('nota', nota);

	if (!nota) {
		return <div>vacio</div>;
	}

	return (
		<div className={styles.nota} onClick={handleClickInElemento}>
			<p className={`${styles.nota__titulo} text-preset-3`}>{nota.title}</p>
			<div className={`${styles.nota__tags} text-preset-6`}>
				<span className={styles.tag}>Dev</span>
				<span className={styles.tag}>React</span>
			</div>
			<span className={`${styles.fecha} text-preset-6`}>{nota.lastEdited}</span>
		</div>
	);
}
