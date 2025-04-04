import ElementoListaDeNotas from '../ListaDeNotas/ElementoListaDeNotas/ElementoListaDeNotas';
import CirculoNuevaNota from '../CirculoNuevaNota/CirculoNuevaNota';
import styles from './ArchivedNotes.module.css';

import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export default function ArchivedNotes() {
	const state = useSelector((state: RootState) => state.nota);

	const notasArchivadas = state.todasLasNotas.filter((item) => item.isArchived);

	return (
		<section className={styles.section}>
			<h3 className={`${styles.h3} text-preset-1`}>ArchivedNotes</h3>
			<p className={`${styles.p} text-preset-5`}>
				All your archived notes are stored here. You can restore or delete them
				anytime
			</p>
			{notasArchivadas.map((nota) => {
				return <ElementoListaDeNotas nota={nota} />;
			})}
			<CirculoNuevaNota />
		</section>
	);
}
