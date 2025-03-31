import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import './css/reset.css';
import './css/variables.css';
import './css/fonts.css';
import './css/base.css';
import './css/spacing.css';
import { Provider } from 'react-redux';
import { store } from './store/store.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</StrictMode>
);
