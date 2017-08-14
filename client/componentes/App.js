import React from 'react';
import estilos from'./a.scss';
export default class App extends React.Component {
  render() {
    return (
     <div style={{textAlign: 'center'}} className={estilos.rojo}>
        <h1>Hello World</h1>
      </div>);
  }
}