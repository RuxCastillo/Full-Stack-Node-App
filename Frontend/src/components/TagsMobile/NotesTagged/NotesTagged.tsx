import ElementoListaDeNotas from '../../ListaDeNotas/ElementoListaDeNotas/ElementoListaDeNotas';
import arrowLeftIcon from '../../../assets/images/icon-arrow-left.svg';
import styles from './NotesTagged.module.css';
import CirculoNuevaNota from '../../CirculoNuevaNota/CirculoNuevaNota';
import { AppDispatch, RootState } from '../../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { tagSeleccionado } from '../../../store/reducer';
import { Nota } from '../../../store/reducer';

export default function NotesTagged() {
	const state = useSelector((state: RootState) => state.nota);
	const dispatch: AppDispatch = useDispatch();

	function handleClickGoBackNotesTagged() {
		dispatch(tagSeleccionado(null));
	}

	let filtrados: Nota[] = [];
	if (state.tagSeleccionado) {
		const tagSeleccionado = state.tagSeleccionado.toLowerCase();
		filtrados = state.todasLasNotas.filter((item) => {
			if (Array.isArray(item.tags)) {
				return item.tags.some((tag) => tag.toLowerCase() === tagSeleccionado);
			}
		});
	}

	return (
		<section className={styles.section}>
			<div className={styles.goBackDiv} onClick={handleClickGoBackNotesTagged}>
				<img src={arrowLeftIcon} alt="" />
				<span className="text-preset-5">Go Back</span>
			</div>
			<h3 className={`${styles.h3} text-preset-1`}>
				Notes Tagged:{' '}
				<span className={styles.h3Span}>{state.tagSeleccionado}</span>
			</h3>
			<p className={`${styles.p} text-preset-5`}>
				All notes with the "{state.tagSeleccionado}" tag are shown here.
			</p>
			{filtrados &&
				filtrados.map((ele) => {
					return <ElementoListaDeNotas nota={ele} />;
				})}
			<CirculoNuevaNota />
		</section>
	);
}
