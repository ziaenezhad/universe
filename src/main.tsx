import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';

import { Universe } from './universe/Universe.ts';
import UI from './UI.tsx';

new Universe(document.getElementById('universe')!);

ReactDOM.createRoot(document.getElementById('ui')!).render(
  <React.StrictMode>
    <UI />
  </React.StrictMode>
);

