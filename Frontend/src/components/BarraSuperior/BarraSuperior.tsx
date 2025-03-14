import styles from './BarraSuperior.module.css';
import logo from '../../assets/images/logo.svg';

export default function BarraSuperior(): React.ReactElement {
	return (
		<header className={styles.header}>
			<img src={logo} alt="logo" />
		</header>
	);
}
