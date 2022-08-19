import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './assets/css/bootstrap.min.css';
import './assets/css/agency.min.css';
import './i18n';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback="Loading...">
      <App />
    </Suspense>
  </React.StrictMode>
);

