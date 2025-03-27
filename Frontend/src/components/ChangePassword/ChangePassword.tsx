import BackToSettings from '../BackToSettings/BackToSettings';
import eyeIcon from '../../assets/images/icon-show-password.svg';
import styles from './ChangePassword.module.css';
import BlueButton from '../BlueButton/BlueButton';

export default function ChangePassword() {
	return (
		<section className={styles.section}>
			<BackToSettings />
			<h3 className={`${styles.h3} text-preset-1`}>Change Password</h3>
			<form action="">
				<div className={styles.container}>
					<label
						htmlFor="oldPassword"
						className={`${styles.label} text-preset-4`}
					>
						Old Password
					</label>
					<div className={styles.inputDiv}>
						<input type="text" className={styles.input} />
						<img src={eyeIcon} alt="show password" className={styles.img} />
					</div>
				</div>
				<div className={styles.container}>
					<label
						htmlFor="oldPassword"
						className={`${styles.label} text-preset-4`}
					>
						New Password
					</label>
					<div className={styles.inputDiv}>
						<input type="text" className={styles.input} />
						<img src={eyeIcon} alt="show password" className={styles.img} />
					</div>
				</div>
				<div className={styles.container}>
					<label
						htmlFor="oldPassword"
						className={`${styles.label} text-preset-4`}
					>
						Confirm New Password
					</label>
					<div className={styles.inputDiv}>
						<input type="text" className={styles.input} />
						<img src={eyeIcon} alt="show password" className={styles.img} />
					</div>
				</div>
				<div className={styles.divButton}>
					<BlueButton>Save Password</BlueButton>
				</div>
			</form>
		</section>
	);
}
