import BarraDeNavegacionInferior from './components/BarraDeNavegacionInferior/BarraDeNavegacionInferior.tsx';
import BarraSuperior from './components/BarraSuperior/BarraSuperior.tsx';
import ListaDeNotas from './components/ListaDeNotas/ListaDeNotas.tsx';
import Nota from './components/Notas/Notas.tsx';
import NavegacionDesktop from './components/NavegacionDesktop/NavegacionDesktop.tsx';
import styles from './App.module.css';
import SideBar from './components/SideBar/SideBar.tsx';

function App() {
	return (
		<main className={styles.main}>
			<BarraSuperior />
			<SideBar />
			{
				//<Nota />
				//<ListaDeNotas />
			}
			<BarraDeNavegacionInferior />
			<NavegacionDesktop />
		</main>
	);
}

export default App;
