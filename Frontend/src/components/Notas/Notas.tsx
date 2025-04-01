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
import { Nota } from '../../store/reducer';

export default function Notas() {
	const state = useSelector((state: RootState) => state.nota);
	const [nota, setNota] = useState({
		id: state.notaActual.id,
		title: state.notaActual.title,
		tags: state.notaActual.tags,
		content: state.notaActual.content,
		lastEdited: state.notaActual.lastEdited,
		isArchived: state.notaActual.isArchived,
	});

	useEffect(() => {
		setNota({
			id: state.notaActual.id,
			title: state.notaActual.title,
			tags: state.notaActual.tags,
			content: state.notaActual.content,
			lastEdited: state.notaActual.lastEdited,
			isArchived: state.notaActual.isArchived,
		});
		window.scrollTo(0, 0);
	}, [state.notaActual]);

	function tagsJoin(arr: string | Array<string>) {
		if (typeof arr === 'string') {
			return arr;
		}
		return arr.join(', ');
	}

	return (
		<>
			<section className={styles.nota}>
				<NotaBarraSuperior />
				<input value={nota.title} className={`${styles.title} text-preset-1`} />
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
				<textarea
					name=""
					id=""
					className={`${styles.textarea} text-preset-5`}
					value={nota.content}
				></textarea>
				<div className={styles.buttons}>
					<button className={styles.save}>Save Note</button>
					<button className={styles.cancel}>Cancel</button>
				</div>
			</section>
			<div className={`${styles.noteSideBar} text-preset-4`}>
				<div className={styles.noteSideBarSquare}>
					<img src={archiveIcon} alt="" />
					Archive Note
				</div>
				<div className={styles.noteSideBarSquare}>
					<img src={deleteIcon} alt="" />
					Delete Note
				</div>
			</div>
		</>
	);
}
