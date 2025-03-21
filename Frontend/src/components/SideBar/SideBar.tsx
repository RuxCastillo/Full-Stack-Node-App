import logo from '../../assets/images/logo.svg';
import styles from './SideBar.module.css';
import homeIcon from '../../assets/images/icon-home.svg';
import archiveIcon from '../../assets/images/icon-archive.svg';
import tagIcon from '../../assets/images/icon-tag.svg';

export default function SideBar(): React.ReactElement {
	return (
		<>
			<div className={styles.logoDiv}>
				<img src={logo} alt="" />
			</div>
			<section className={styles.section}>
				<div className={styles.element}>
					<img src={homeIcon} alt="" />
					<span>All Notes</span>
				</div>
				<div className={`${styles.element} ${styles.archive}`}>
					<img src={archiveIcon} alt="" />
					<span>Archived Notes</span>
				</div>
				<span className={`${styles.span} text-preset-4`}>Tags</span>
				<div className={styles.element}>
					<img src={tagIcon} alt="" />
					<span>Cooking</span>
				</div>
				<div className={styles.element}>
					<img src={tagIcon} alt="" />
					<span>Cooking</span>
				</div>
				<div className={styles.element}>
					<img src={tagIcon} alt="" />
					<span>Cooking</span>
				</div>
				<div className={styles.element}>
					<img src={tagIcon} alt="" />
					<span>Cooking</span>
				</div>
				<div className={styles.element}>
					<img src={tagIcon} alt="" />
					<span>Cooking</span>
				</div>
				<div className={styles.element}>
					<img src={tagIcon} alt="" />
					<span>Cooking</span>
				</div>
				<div className={styles.element}>
					<img src={tagIcon} alt="" />
					<span>Cooking</span>
				</div>
				<div className={styles.element}>
					<img src={tagIcon} alt="" />
					<span>Cooking</span>
				</div>
			</section>
		</>
	);
}
