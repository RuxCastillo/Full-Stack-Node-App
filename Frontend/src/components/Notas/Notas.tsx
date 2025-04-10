import styles from './Notas.module.css';
import NotaBarraSuperior from './NotaBarraSuperior/NotaBarraSuperior';
import tagsIcon from '../../assets/images/icon-tag.svg';
import clockIcon from '../../assets/images/icon-clock.svg';
import archiveIcon from '../../assets/images/icon-archive.svg';
import deleteIcon from '../../assets/images/icon-delete.svg';

import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import { useEffect, useState } from 'react';
import { formatDate } from '../../utils/convertirFecha';
//import { Nota } from '../../store/reducer';
import {
	archivarNotaEnTodasNotas,
	deleteNoteRedux,
	volverPantallaAnterior,
	saveNote,
} from '../../store/reducer';

export default function Notas() {
	const state = useSelector((state: RootState) => state.nota);
	const dispatch: AppDispatch = useDispatch();
	const [nota, setNota] = useState({
		id: state.notaActual.id,
		title: state.notaActual.title,
		tags: state.notaActual.tags,
		content: state.notaActual.content,
		lastEdited: state.notaActual.lastEdited,
		isArchived: state.notaActual.isArchived,
	});
	const [guardandoNota, setGuardandoNota] = useState(nota);

	useEffect(() => {
		const nuevaNota = {
			id: state.notaActual.id,
			title: state.notaActual.title,
			tags: state.notaActual.tags,
			content: state.notaActual.content,
			lastEdited: state.notaActual.lastEdited,
			isArchived: state.notaActual.isArchived,
		};
		setNota(nuevaNota);
		setGuardandoNota(nuevaNota);
		window.scrollTo(0, 0);
	}, [state.notaActual]);

	function tagsJoin(arr: string | Array<string>) {
		if (typeof arr === 'string') {
			return arr;
		}
		return arr.join(', ');
	}

	function handleChange(
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) {
		const { name, value } = e.target;
		setNota((prevState) => ({ ...prevState, [name]: value }));
	}

	function cancelNota() {
		setNota(guardandoNota);
	}

	function handleClickArchived() {
		dispatch(archivarNotaEnTodasNotas(nota.id));
	}

	function deleteNote() {
		dispatch(deleteNoteRedux(nota.id));
		dispatch(volverPantallaAnterior());
	}

	function saveNota() {
		dispatch(saveNote(nota));
	}

	return (
		<>
			<section className={styles.nota}>
				<NotaBarraSuperior
					cancelNota={cancelNota}
					handleClickArchived={handleClickArchived}
					deleteNote={deleteNote}
				/>
				<input
					value={nota.title}
					className={`${styles.title} text-preset-1`}
					name="title"
					onChange={handleChange}
				/>
				<div className={`${styles.info} text-preset-6`}>
					<div className={styles.infoTitle}>
						<img src={tagsIcon} alt="" />
						tags
					</div>
					<div>
						{nota.tags === 'Add tags separated by commas (e.g. Work, Planning)'
							? nota.tags
							: tagsJoin(nota.tags)}
					</div>
					<div className={styles.infoTitle}>
						<img src={clockIcon} alt="" />
						Last edited
					</div>
					<div>
						{nota.lastEdited === 'Not yet saved'
							? nota.lastEdited
							: formatDate(nota.lastEdited)}
					</div>
				</div>
				<div className={styles.textareaANDbuttons}>
					<textarea
						name="content"
						id=""
						className={`${styles.textarea} text-preset-5`}
						value={nota.content}
						onChange={handleChange}
					></textarea>
					<div className={styles.buttons}>
						<button className={styles.save} onClick={saveNota}>
							Save Note
						</button>
						<button className={styles.cancel} onClick={cancelNota}>
							Cancel
						</button>
					</div>
				</div>
			</section>
			<div className={`${styles.noteSideBar} text-preset-4`}>
				<div className={styles.noteSideBarSquare} onClick={handleClickArchived}>
					<img src={archiveIcon} alt="" />
					Archive Note
				</div>
				<div className={styles.noteSideBarSquare} onClick={deleteNote}>
					<img src={deleteIcon} alt="" />
					Delete Note
				</div>
			</div>
		</>
	);
}
