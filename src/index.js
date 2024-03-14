import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "@fortawesome/fontawesome-free/css/all.min.css"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
const routerr = createHashRouter([
  {path:"" , element:<App/> , children:[
    {path:"" , element:<Home/>},
    {path:"about" , element:<About/>},
    {path:"portfolio" , element:<Portfolio/>},
    {path:"contact" , element:<Contact/>}
  ]},
 
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <RouterProvider router={routerr}/>
);


reportWebVitals();
