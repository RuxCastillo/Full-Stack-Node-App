import ElementoListaDeNotas from '../ListaDeNotas/ElementoListaDeNotas/ElementoListaDeNotas';
import CirculoNuevaNota from '../CirculoNuevaNota/CirculoNuevaNota';
import styles from './ArchivedNotes.module.css';

export default function ArchivedNotes() {
	return (
		<section className={styles.section}>
			<h3 className={`${styles.h3} text-preset-1`}>ArchivedNotes</h3>
			<p className={`${styles.p} text-preset-5`}>
				All your archived notes are stored here. You can restore or delete them
				anytime
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
