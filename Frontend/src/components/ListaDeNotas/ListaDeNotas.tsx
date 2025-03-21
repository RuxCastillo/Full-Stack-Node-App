import styles from './ListaDeNotas.module.css';
import ElementoListaDeNotas from './ElementoListaDeNotas/ElementoListaDeNotas';
import CirculoNuevaNota from '../CirculoNuevaNota/CirculoNuevaNota';

export default function ListaDeNotas(): React.ReactElement {
	return (
		<section className={styles.section}>
			<h1 className={`${styles.h1} text-preset-1`}>All Notes</h1>
			<button className={`${styles.button} text-preset-4`}>
				+ Create New Note
			</button>
			<ElementoListaDeNotas />
			<ElementoListaDeNotas />
			<ElementoListaDeNotas />
			<ElementoListaDeNotas />
			<ElementoListaDeNotas />
			<ElementoListaDeNotas />
			<ElementoListaDeNotas />
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
