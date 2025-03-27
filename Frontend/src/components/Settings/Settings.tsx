import themeColor from '../../assets/images/icon-sun.svg';
import fontIcon from '../../assets/images/icon-font.svg';
import lockIcon from '../../assets/images/icon-lock.svg';
import logoutIcon from '../../assets/images/icon-logout.svg';
import styles from './Settings.module.css';

export default function Settings() {
	return (
		<section className={styles.section}>
			<h3 className={`${styles.h3} text-preset-1`}>Settings</h3>
			<div className={styles.borderBottom}>
				<div className={styles.div}>
					<img src={themeColor} alt="" className={styles.img} />
					<span className={`${styles.span} text-preset-4`}>Color Theme</span>
				</div>
				<div className={styles.div}>
					<img src={fontIcon} alt="" className={styles.img} />
					<span className={`${styles.span} text-preset-4`}>Font Theme</span>
				</div>
				<div className={styles.div}>
					<img src={lockIcon} alt="" className={styles.img} />
					<span className={`${styles.span} text-preset-4`}>
						Change Password
					</span>
				</div>
			</div>
			<div className={styles.div}>
				<img src={logoutIcon} alt="" className={styles.img} />
				<span className={`${styles.span} text-preset-4`}>Logout</span>
			</div>
		</section>
	);
}
