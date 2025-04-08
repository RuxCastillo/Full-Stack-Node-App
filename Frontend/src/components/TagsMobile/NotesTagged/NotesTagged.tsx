import ElementoListaDeNotas from '../../ListaDeNotas/ElementoListaDeNotas/ElementoListaDeNotas';
import arrowLeftIcon from '../../../assets/images/icon-arrow-left.svg';
import styles from './NotesTagged.module.css';
import CirculoNuevaNota from '../../CirculoNuevaNota/CirculoNuevaNota';
import { dispatch } from '@reduxjs/toolkit';
import { AppDispatch } from '../../../store/store';
import { useDispatch } from 'react-redux';
import { tagSeleccionado } from '../../../store/reducer';

export default function NotesTagged() {
	const dispatch: AppDispatch = useDispatch();

	function handleClickGoBackNotesTagged() {
		dispatch(tagSeleccionado(null));
	}

	return (
		<section className={styles.section}>
			<div className={styles.goBackDiv} onClick={handleClickGoBackNotesTagged}>
				<img src={arrowLeftIcon} alt="" />
				<span className="text-preset-5">Go Back</span>
			</div>
			<h3 className={`${styles.h3} text-preset-1`}>
				Notes Tagged: <span className={styles.h3Span}>Dev</span>
			</h3>
			<p className={`${styles.p} text-preset-5`}>
				All notes with the "Dev" tag are shown here.
			</p>
			<ElementoListaDeNotas />
			<ElementoListaDeNotas />
			<ElementoListaDeNotas />
			<ElementoListaDeNotas />
			<ElementoListaDeNotas />
			<ElementoListaDeNotas />
			<ElementoListaDeNotas />
			<ElementoListaDeNotas />
			<CirculoNuevaNota />
		</section>
	);
}
