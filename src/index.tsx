import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './pages/Home';
import NavigationBar from './components/NavigationBar';
import ThemeProvider from 'react-bootstrap/ThemeProvider';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

interface Provider {
  name:string,
  price:number,
  description:string,
}

const order:Provider[] = []

root.render(

  <React.StrictMode>
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint='xxs'
    >
      <NavigationBar order={order}/>
      <Homepage order={order}/>
    </ThemeProvider>
  </React.StrictMode>,
);
