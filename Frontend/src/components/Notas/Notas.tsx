import styles from './Notas.module.css';
import NotaBarraSuperior from './NotaBarraSuperior/NotaBarraSuperior';
import tagsIcon from '../../assets/images/icon-tag.svg';
import clockIcon from '../../assets/images/icon-clock.svg';
import archiveIcon from '../../assets/images/icon-archive.svg';
import deleteIcon from '../../assets/images/icon-delete.svg';

export default function Notas() {
	return (
		<>
			<section className={styles.nota}>
				<NotaBarraSuperior />
				<input
					value="Enter a title"
					className={`${styles.title} text-preset-1`}
				/>
				<div className={`${styles.info} text-preset-6`}>
					<div className={styles.infoTitle}>
						<img src={tagsIcon} alt="" />
						tags
					</div>
					<div>Dev, React</div>
					<div className={styles.infoTitle}>
						<img src={clockIcon} alt="" />
						Last edited
					</div>
					<div>29 Oct 2024</div>
				</div>
				<textarea
					name=""
					id=""
					className={`${styles.textarea} text-preset-5`}
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
