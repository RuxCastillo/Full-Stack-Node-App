import BarraDeNavegacionInferior from './components/BarraDeNavegacionInferior/BarraDeNavegacionInferior.tsx';
import BarraSuperior from './components/BarraSuperior/BarraSuperior.tsx';
import ListaDeNotas from './components/ListaDeNotas/ListaDeNotas.tsx';
import styles from './App.module.css';

function App() {
	return (
		<main className={styles.main}>
			<BarraSuperior />
			<ListaDeNotas />
			<BarraDeNavegacionInferior />
		</main>
	);
}

export default App;
