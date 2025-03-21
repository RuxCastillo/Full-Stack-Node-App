import tagIcon from '../../assets/images/icon-tag.svg';
import styles from './Tags.module.css';

export default function Tags() {
	return (
		<div className={styles.element}>
			<img src={tagIcon} alt="" />
			<span>Cooking</span>
		</div>
	);
}
