import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App.tsx';
import { Universe } from './universe/Universe.ts';

export const universe = new Universe(document.getElementById('universe')!);

ReactDOM.createRoot(document.getElementById('ui')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
