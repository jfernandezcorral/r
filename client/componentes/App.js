import React from 'react';
import estilos from'./App.scss';
import Comercial from './comercial/Comercial';
export default class App extends React.Component {
  render() {
    /*return (
     <div style={{textAlign: 'center'}} className={estilos.rojo}>
        <h1>Hello World</h1>
      </div>);*/
    return (
    	<div style={{height: '100%', display: 'flex'/*, alignItems: 'stretch'*/}}>
    		<aside style={{width: '30%', marginRight: '5px'}} className={estilos.panel}>
    			<Comercial/>
    		</aside>
    		<section style={{width: '70%'}} className={estilos.panel}>
    			ghkfjkr
    		</section>
    	</div>
    );
  }
}