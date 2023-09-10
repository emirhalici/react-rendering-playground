import App from './App';
import DOM from './core/renderer';

const entryPoint = document.querySelector('.playground-entry-point');
DOM.createRoot(entryPoint ?? undefined).render(App, {});
