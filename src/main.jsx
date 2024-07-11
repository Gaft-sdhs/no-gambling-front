import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import './css/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </>
);

// 서비스 워커 등록  추가
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then((registration) => {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }).catch((error) => {
            console.log('ServiceWorker registration failed: ', error);
        });
    });
}
