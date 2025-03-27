import backIcon from '../../assets/images/icon-arrow-left.svg';
import styles from './BackToSettings.module.css';

export default function BackToSettings() {
	return (
		<div className={`${styles.container} text-preset-4`}>
			<img src={backIcon} alt="go back to settings" className={styles.img} />
			<span className={styles.span}>Settings</span>
		</div>
	);
}
