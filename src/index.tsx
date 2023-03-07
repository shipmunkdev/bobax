import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './pages/Home';
import NavigationBar from './components/NavigationBar';
import ThemeProvider from 'react-bootstrap/ThemeProvider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint='xxs'
    >
      <NavigationBar />
      <Homepage />
    </ThemeProvider>
  </React.StrictMode>,
);
