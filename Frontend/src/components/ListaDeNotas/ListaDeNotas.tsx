import styles from './ListaDeNotas.module.css';
import ElementoListaDeNotas from './ElementoListaDeNotas/ElementoListaDeNotas';
import CirculoNuevaNota from '../CirculoNuevaNota/CirculoNuevaNota';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { Nota } from '../../store/reducer';

export default function ListaDeNotas(): React.ReactElement {
	const state = useSelector((state: RootState) => state.nota);

	let noNotas;

	if (!state.notas || state.notas.length === 0) {
		noNotas = <p>You dont have any notes yet</p>;
	} else if (state.pantallaMostrada === 'archived') {
		noNotas = state.todasLasNotas
			.filter((nota) => nota.isArchived)
			.map((nota: Nota): React.ReactElement => {
				return <ElementoListaDeNotas nota={nota} />;
			});
	} else {
		noNotas = state.notas
			.filter((nota) => !nota.isArchived)
			.map((nota: Nota): React.ReactElement => {
				return <ElementoListaDeNotas nota={nota} />;
			});
	}

	return (
		<section className={styles.section}>
			<h1 className={`${styles.h1} text-preset-1`}>All Notes</h1>
			<button className={`${styles.button} text-preset-4`}>
				+ Create New Note
			</button>
			{noNotas}
			<CirculoNuevaNota />
		</section>
	);
}
