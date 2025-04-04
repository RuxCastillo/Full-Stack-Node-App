import logo from '../../assets/images/logo.svg';
import styles from './SideBar.module.css';
import homeIcon from '../../assets/images/icon-home.svg';
import archiveIcon from '../../assets/images/icon-archive.svg';
import Tags from '../Tags/Tags.tsx';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store.tsx';
import {
	actualizarListaDeNotas,
	cambiarPantalla,
	regresarTodasLasNotas,
} from '../../store/reducer.tsx';

export default function SideBar(): React.ReactElement {
	const state = useSelector((state: RootState) => state.nota);
	const dispatch: AppDispatch = useDispatch();

	function handleClickAllNotes() {
		dispatch(cambiarPantalla('home'));
		dispatch(regresarTodasLasNotas());
	}

	function handleClickArchivedNotes() {
		dispatch(cambiarPantalla('archived'));
	}

	function handleClickTag(str: string) {
		const res = state.todasLasNotas.filter((nota) => {
			return nota.tags.some((tag) => str === tag);
		});
		console.log('las notas con tag filtrados', res);
		dispatch(actualizarListaDeNotas(res));
	}

	return (
		<>
			<div className={styles.logoDiv}>
				<img src={logo} alt="" />
			</div>
			<section className={styles.section}>
				<div className={styles.element} onClick={handleClickAllNotes}>
					<img src={homeIcon} alt="" />
					<span>All Notes</span>
				</div>
				<div
					className={`${styles.element} ${styles.archive}`}
					onClick={handleClickArchivedNotes}
				>
					<img src={archiveIcon} alt="" />
					<span>Archived Notes</span>
				</div>
				<span className={`${styles.span} text-preset-4`}>Tags</span>
				{state.todosLosTags.map((tag) => {
					return <Tags tag={tag} handleClickTag={handleClickTag} />;
				})}
			</section>
		</>
	);
}
