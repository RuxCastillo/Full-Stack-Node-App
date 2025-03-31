interface State {
	notaActual: object | null;
	pantallaMostrada: string;
	pantallaAnterior: string;
}

const initialState: State = {
	notaActual: {},
	pantallaMostrada: 'home',
	pantallaAnterior: 'home',
};

const ACTUALIZAR_NOTA_ACTUAL = 'nota/actualizarNotaActual';
const CAMBIAR_PANTALLA_MOSTRADA = 'pantalla/cambiarPantalla';

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
