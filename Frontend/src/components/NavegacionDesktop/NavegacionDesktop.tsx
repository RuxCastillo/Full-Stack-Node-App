import { useEffect, useState } from 'react';
import searchIcon from '../../assets/images/icon-search.svg';
import settingsIcon from '../../assets/images/icon-settings.svg';
import ElementoListaDeNotas from '../ListaDeNotas/ElementoListaDeNotas/ElementoListaDeNotas';
import styles from './NavegacionDesktop.module.css';
import { Nota } from '../../store/reducer';

import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import { actualizarListaDeNotas } from '../../store/reducer';

export default function NavegacionDesktop() {
	const state = useSelector((state: RootState) => state.nota);
	const dispatch: AppDispatch = useDispatch();
	const [searchInput, setSearchInput] = useState('');
	const [resultadosFiltrados, setResultadosFiltrados] = useState<Nota[]>([]);

	function handleChangeSearchInput(e: React.ChangeEvent<HTMLInputElement>) {
		setSearchInput(e.target.value);
	}

	useEffect(() => {
		if (searchInput !== '') {
			const filtrados = state.todasLasNotas.filter(
				(item) =>
					item.title.toLowerCase().includes(searchInput.toLowerCase()) ||
					item.content.toLowerCase().includes(searchInput.toLowerCase())
			);
			setResultadosFiltrados(filtrados);
		}
	}, [searchInput, state.todasLasNotas]);

	useEffect(() => {
		dispatch(actualizarListaDeNotas(resultadosFiltrados));
	}, [resultadosFiltrados, dispatch]);

	return (
		<section className={styles.section}>
			<h3 className={`${styles.h3} text-preset-1`}>Search</h3>
			<div className={styles.buscador}>
				<img src={searchIcon} alt="" className={styles.lupa} />
				<input
					type="text"
					className={`${styles.input} text-preset-5`}
					onChange={handleChangeSearchInput}
				/>
			</div>
			{searchInput !== '' && (
				<span className={`${styles.span} text-preset-5`}>
					All notes matching "{searchInput}" are displayed below.
				</span>
			)}
			<div className={styles.settingsIconDiv}>
				<img
					src={settingsIcon}
					alt="settings"
					className={styles.settingsIcon}
				/>
			</div>
			<div className={styles.listaDeNotas}>
				{resultadosFiltrados.map((nota) => {
					return <ElementoListaDeNotas nota={nota} />;
				})}
			</div>
		</section>
	);
}
