import React from 'react';
import ReactDOM from 'react-dom/client';
import Heading from './components/header/Heading';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Heading />
  </React.StrictMode>,
);
