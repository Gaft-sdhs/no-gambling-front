import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import './css/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Service Worker 등록 
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then((registration) => {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }).catch((error) => {
      console.log('ServiceWorker registration failed: ', error);
    });
  });
}

// PWA 설치 프롬프트 핸들링
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  // 설치 프롬프트를 가로채기
  e.preventDefault();
  deferredPrompt = e;
  
  // 설치 버튼을 보여주는 로직을 추가
  const installButton = document.createElement('button');
  installButton.innerText = "Install PWA";
  installButton.style.position = 'fixed';
  installButton.style.bottom = '10px';
  installButton.style.right = '10px';
  installButton.style.padding = '10px';
  installButton.style.background = 'blue';
  installButton.style.color = 'white';
  document.body.appendChild(installButton);

  installButton.addEventListener('click', () => {
    // 설치 프롬프트를 트리거
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the PWA prompt');
      } else {
        console.log('User dismissed the PWA prompt');
      }
      deferredPrompt = null;
      installButton.remove();
    });
  });
});
