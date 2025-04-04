import tagIcon from '../../assets/images/icon-tag.svg';
import styles from './Tags.module.css';

export default function Tags({
	tag,
	handleClickTag,
}: {
	tag: string;
	handleClickTag: (str: string) => void;
}) {
	return (
		<div className={styles.element} onClick={() => handleClickTag(tag)}>
			<img src={tagIcon} alt="" />
			<span>{tag}</span>
		</div>
	);
}
