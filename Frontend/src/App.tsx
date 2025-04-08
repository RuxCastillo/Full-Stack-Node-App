import BarraDeNavegacionInferior from './components/BarraDeNavegacionInferior/BarraDeNavegacionInferior.tsx';
import BarraSuperior from './components/BarraSuperior/BarraSuperior.tsx';
import ListaDeNotas from './components/ListaDeNotas/ListaDeNotas.tsx';
import Notas from './components/Notas/Notas.tsx';
import NavegacionDesktop from './components/NavegacionDesktop/NavegacionDesktop.tsx';
import styles from './App.module.css';
import SideBar from './components/SideBar/SideBar.tsx';
import TagsMobile from './components/TagsMobile/TagsMobile.tsx';
import NotesTagged from './components/TagsMobile/NotesTagged/NotesTagged.tsx';
import ArchivedNotes from './components/ArchivedNotes/ArchivedNotes';
import Settings from './components/Settings/Settings.tsx';
import ChangePassword from './components/ChangePassword/ChangePassword.tsx';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store/store.tsx';
import { useDispatch } from 'react-redux';
import { Nota } from './store/reducer';
import {
	actualizarTodasNotas,
	regresarTodasLasNotas,
	todosLosTagsRedux,
} from './store/reducer.tsx';

function App() {
	const [isLargeScreen, setIsLargeScreen] = useState<boolean>(
		window.innerWidth > 1024
	);
	const elestado = useSelector((state: RootState) => state.nota);
	const dispatch: AppDispatch = useDispatch();
	console.log(elestado);

	useEffect(() => {
		const handleResize = () => {
			setIsLargeScreen(window.innerWidth > 1024);
			dispatch(regresarTodasLasNotas());
		};

		window.addEventListener('resize', handleResize);

		async function leerJSON() {
			const res = await fetch('/data.json');
			const data = await res.json();
			dispatch(actualizarTodasNotas(data.notes));
		}
		leerJSON();

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [dispatch]);

	useEffect(() => {
		function todosLosTags() {
			const arr: string[] = [];
			elestado.todasLasNotas.forEach((nota: Nota) => {
				if (!nota.isArchived && Array.isArray(nota.tags)) {
					nota.tags.forEach((tag: string) => {
						if (!arr.includes(tag)) {
							arr.push(tag);
						}
					});
				}
			});
			return arr;
		}
		const todosTags = todosLosTags();

		if (JSON.stringify(todosTags) !== JSON.stringify(elestado.todosLosTags)) {
			dispatch(todosLosTagsRedux(todosTags));
		}
	}, [elestado.todosLosTags, dispatch, elestado.todasLasNotas]);

	useEffect(() => {
		if (elestado.pantallaMostrada === 'home') {
			dispatch(regresarTodasLasNotas());
		}
	}, [elestado.pantallaMostrada, dispatch]);

	return (
		<main className={styles.main}>
			<BarraSuperior />
			<SideBar />
			{(elestado.pantallaMostrada === 'home' || isLargeScreen) && (
				<ListaDeNotas />
			)}
			{elestado.pantallaMostrada === 'tags' && !elestado.tagSeleccionado && (
				<TagsMobile />
			)}
			{(elestado.pantallaMostrada === 'search' || isLargeScreen) && (
				<NavegacionDesktop />
			)}
			{elestado.pantallaMostrada === 'archived' && <ArchivedNotes />}
			{elestado.pantallaMostrada === 'settings' && <Settings />}
			{(elestado.pantallaMostrada === 'nota abierta' || isLargeScreen) && (
				<Notas />
			)}
			{elestado.pantallaMostrada === 'tags' && elestado.tagSeleccionado && (
				<NotesTagged />
			)}
			{
				//<Nota />
				//<ChangePassword />
			}
			<BarraDeNavegacionInferior />
		</main>
	);
}

export default App;
