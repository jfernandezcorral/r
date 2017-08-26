import './base.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './componentes/App';
//ReactDOM.render(<App />, document.getElementById('root'));



import {HashRouter, Route} from 'react-router-dom'
import {
  Home,
  About,
  Events,
  Products,
  Contact
} from './vistas'



window.React = React
ReactDOM.render(
  <HashRouter>
    <div className="main">
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/events" component={Events} />
        <Route path="/products" component={Products} />
        <Route path="/contact" component={Contact} />
    </div>
  </HashRouter>,
  document.getElementById('root')
)

