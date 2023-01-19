import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Example from './App3';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import Ejemplo from  './EjemploMateria';
import App from './App3';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ObtenerValores from './obtenervalores'
ReactDOM.render(
  <React.StrictMode>
    
    
    <App/>
    {/* <Prueba/> */}

    {/* <Router>      
      <div className="App">
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/obtenervalores" component={ObtenerValores} />
        </Switch>
      </div>
    </Router> */}

    {/* <Ejemplo /> */}
    {/* <Example /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
