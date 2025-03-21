import styles from './ListaDeNotas.module.css';
import plus from '../../assets/images/icon-plus.svg';
import ElementoListaDeNotas from './ElementoListaDeNotas/ElementoListaDeNotas';

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
			<div className={styles.circulo}>
				<img className={styles.plus} src={plus} alt="" />
			</div>
		</section>
	);
}
