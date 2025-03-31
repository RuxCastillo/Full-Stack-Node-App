import BarraDeNavegacionInferior from './components/BarraDeNavegacionInferior/BarraDeNavegacionInferior.tsx';
import BarraSuperior from './components/BarraSuperior/BarraSuperior.tsx';
import ListaDeNotas from './components/ListaDeNotas/ListaDeNotas.tsx';
import Nota from './components/Notas/Notas.tsx';
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
import { RootState } from './store/store.tsx';

function App() {
	const [pantalla, setPantalla] = useState('home');
	const [isLargeScreen, setIsLargeScreen] = useState<boolean>(
		window.innerWidth > 1024
	);
	const elestado = useSelector((state: RootState) => state.nota);
	console.log(elestado);

	useEffect(() => {
		const handleResize = () => {
			setIsLargeScreen(window.innerWidth > 1024);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<main className={styles.main}>
			<BarraSuperior />
			<SideBar />
			{elestado.pantallaMostrada === 'home' && <ListaDeNotas />}
			{elestado.pantallaMostrada === 'tags' && <NotesTagged />}
			{(elestado.pantallaMostrada === 'search' || isLargeScreen) && (
				<NavegacionDesktop />
			)}
			{elestado.pantallaMostrada === 'archived' && <ArchivedNotes />}
			{elestado.pantallaMostrada === 'settings' && <Settings />}
			{(elestado.pantallaMostrada === 'nota abierta' || isLargeScreen) && (
				<Nota />
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
