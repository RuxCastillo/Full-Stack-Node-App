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

function App() {
	const [pantalla, setPantalla] = useState('home');
	const [isLargeScreen, setIsLargeScreen] = useState<boolean>(
		window.innerWidth > 1024
	);

	useEffect(() => {
		const handleResize = () => {
			setIsLargeScreen(window.innerWidth > 1024);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	function changePantalla(str: string) {
		setPantalla(str);
	}

	return (
		<main className={styles.main}>
			<BarraSuperior />
			<SideBar />
			{pantalla === 'home' && <ListaDeNotas />}
			{pantalla === 'tags' && <NotesTagged />}
			{(pantalla === 'search' || isLargeScreen) && <NavegacionDesktop />}
			{pantalla === 'archived' && <ArchivedNotes />}
			{pantalla === 'settings' && <Settings />}
			{(pantalla === 'nota abierta' || isLargeScreen) && <Nota />}
			{
				//<Nota />
				//<ChangePassword />
			}
			<BarraDeNavegacionInferior changePantalla={changePantalla} />
		</main>
	);
}

export default App;
