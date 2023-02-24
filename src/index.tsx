import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './pages/Home';
import NavigationBar from './components/NavigationBar';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <NavigationBar />
    <Homepage />
  </React.StrictMode>,
);
