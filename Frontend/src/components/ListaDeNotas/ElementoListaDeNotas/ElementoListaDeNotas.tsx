import styles from '../ListaDeNotas.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../../store/store';
import { cambiarPantalla, ponerNotaEnPantalla } from '../../../store/reducer';
import { Nota } from '../../../store/reducer';
import { formatDate } from '../../../utils/convertirFecha';

interface Props {
	nota: Nota;
}

export default function ElementoListaDeNotas({ nota }: Props) {
	const dispatch: AppDispatch = useDispatch();

	function handleClickInElemento() {
		dispatch(ponerNotaEnPantalla(nota));
		dispatch(cambiarPantalla('nota abierta'));
	}

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
			<span className={`${styles.fecha} text-preset-6`}>
				{formatDate(nota.lastEdited)}
			</span>
		</div>
	);
}
