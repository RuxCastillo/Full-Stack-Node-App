import searchIcon from '../../assets/images/icon-search.svg';
import settingsIcon from '../../assets/images/icon-settings.svg';
import ElementoListaDeNotas from '../ListaDeNotas/ElementoListaDeNotas/ElementoListaDeNotas';
import styles from './NavegacionDesktop.module.css';

export default function NavegacionDesktop() {
	return (
		<section className={styles.section}>
			<h3 className={`${styles.h3} text-preset-1`}>Search</h3>
			<div className={styles.buscador}>
				<img src={searchIcon} alt="" className={styles.lupa} />
				<input type="text" className={`${styles.input} text-preset-5`} />
			</div>
			<span className={`${styles.span} text-preset-5`}>
				All notes matching "Dev" are displayed below.
			</span>
			<div className={styles.settingsIconDiv}>
				<img
					src={settingsIcon}
					alt="settings"
					className={styles.settingsIcon}
				/>
			</div>
			<div className={styles.listaDeNotas}>
				<ElementoListaDeNotas />
				<ElementoListaDeNotas />
				<ElementoListaDeNotas />
				<ElementoListaDeNotas />
				<ElementoListaDeNotas />
				<ElementoListaDeNotas />
				<ElementoListaDeNotas />
				<ElementoListaDeNotas />
				<ElementoListaDeNotas />
				<ElementoListaDeNotas />
			</div>
		</section>
	);
}
