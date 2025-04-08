import styles from './TagsMobile.module.css';
import Tags from '../Tags/Tags';
import CirculoNuevaNota from '../CirculoNuevaNota/CirculoNuevaNota';
import { AppDispatch, RootState } from '../../store/store';
import { useSelector, useDispatch } from 'react-redux';
import { tagSeleccionado } from '../../store/reducer';

export default function TagsMobile() {
	const state = useSelector((state: RootState) => {
		return state.nota;
	});
	const dispatch: AppDispatch = useDispatch();

	function handleClickTagMobile(tag: string) {
		dispatch(tagSeleccionado(tag));
	}

	return (
		<section className={styles.section}>
			<h3 className={`${styles.h3} text-preset-1`}>Tags</h3>
			{state.todosLosTags.map((ele) => {
				return <Tags tag={ele} handleClickTag={handleClickTagMobile} />;
			})}
			<CirculoNuevaNota />
		</section>
	);
}
