interface State {
	notaActual: Nota;
	pantallaMostrada: string;
	pantallaAnterior: string;
	notas: Array<Nota>;
	todasLasNotas: Array<Nota>;
}

export interface Nota {
	id: number;
	title: string;
	tags: Array<string> | string;
	content: string;
	lastEdited: string;
	isArchived: boolean;
}

const initialState: State = {
	notaActual: {
		id: Math.floor(Math.random() * (1000 - 200 + 1)) + 200,
		title: 'Enter title',
		tags: 'Add tags separated by commas (e.g. Work, Planning)',
		content: 'Start typing your note here...',
		lastEdited: 'Not yet saved',
		isArchived: false,
	},
	todasLasNotas: [],
	pantallaMostrada: 'home',
	pantallaAnterior: 'home',
	notas: [],
};

const ACTUALIZAR_NOTA_ACTUAL = 'nota/actualizarNotaActual';
const CAMBIAR_PANTALLA_MOSTRADA = 'pantalla/cambiarPantalla';
const ACTUALIZAR_TODAS_NOTAS = 'nota/actualizarTodasNotas';
const PONER_NOTA_EN_PANTALLA = 'pantalla/ponerNotaEnPantalla';
const VOLVER_PANTALLA_ANTERIOR = 'pantalla/volverPantallaAnterior';
const ACTUALIZAR_NOTAS = 'nota/actualizarListaDeNotas';
const REGRESAR_TODAS_LAS_NOTAS = 'nota/regresarTodasLasNotas';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const reducer = (state = initialState, action: any): State => {
	switch (action.type) {
		case ACTUALIZAR_NOTA_ACTUAL:
			return {
				...state,
				notaActual: action.payload,
			};
		case CAMBIAR_PANTALLA_MOSTRADA:
			return {
				...state,
				pantallaAnterior: state.pantallaMostrada,
				pantallaMostrada: action.payload,
			};
		case ACTUALIZAR_TODAS_NOTAS:
			return {
				...state,
				todasLasNotas: action.payload,
				notas: action.payload,
			};

		case ACTUALIZAR_NOTAS:
			return {
				...state,
				notas: action.payload,
			};
		case REGRESAR_TODAS_LAS_NOTAS:
			return {
				...state,
				notas: state.todasLasNotas,
			};
		case PONER_NOTA_EN_PANTALLA:
			return {
				...state,
				notaActual: action.payload,
			};
		case VOLVER_PANTALLA_ANTERIOR:
			return {
				...state,
				pantallaMostrada: state.pantallaAnterior,
			};
		default:
			return state;
	}
};

export const actualizarNota = (nota: object | null) => ({
	type: ACTUALIZAR_NOTA_ACTUAL,
	payload: nota,
});

export const cambiarPantalla = (string: string) => ({
	type: CAMBIAR_PANTALLA_MOSTRADA,
	payload: string,
});

export const actualizarTodasNotas = (array: Array<Nota>) => ({
	type: ACTUALIZAR_TODAS_NOTAS,
	payload: array,
});

export const ponerNotaEnPantalla = (nota: object | null) => ({
	type: PONER_NOTA_EN_PANTALLA,
	payload: nota,
});

export const volverPantallaAnterior = () => ({
	type: VOLVER_PANTALLA_ANTERIOR,
	payload: null,
});

export const actualizarListaDeNotas = (array: Array<Nota>) => ({
	type: ACTUALIZAR_NOTAS,
	payload: array,
});

export const regresarTodasLasNotas = () => ({
	type: REGRESAR_TODAS_LAS_NOTAS,
	payload: null,
});
