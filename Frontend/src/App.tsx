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

function App() {
	return (
		<main className={styles.main}>
			<BarraSuperior />
			<SideBar />
			{
				//<Nota />
				//<ListaDeNotas />
				//<NavegacionDesktop />
				//<NotesTagged />
			}
			<ArchivedNotes />
			<BarraDeNavegacionInferior />
		</main>
	);
}

export default App;
