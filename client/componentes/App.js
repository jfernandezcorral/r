import React from 'react';
import estilos from'./App.scss';
import Comercial from './comercial/Comercial';
import ScrollInfinito from 'cmp/base/ScrollInfinito';
export default class App extends React.Component {
  render() {
    return (
    	<div style={{height: '100%', display: 'flex'/*, alignItems: 'stretch'*/}}>
    		<aside style={{width: '30%', marginRight: '5px'}} className={estilos.panel}>
    			<Comercial/>
    		</aside>
    		<section style={{width: '70%'}} className={estilos.panel}>
    			<ScrollInfinito onTop={(s) => console.log(s)}>
    				<div>
    					<p>erewtrwerwer</p>
    					<p>erewtrwerwer</p>
    					<p>erewtrwerwer</p>
    					<p>erewtrwerwer</p>
    					<p>erewtrwerwer</p>
    					<p>erewtrwerwer</p>
    					<p>erewtrwerwer</p>
    					<p>erewtrwerwer</p>
    					<p>erewtrwerwer</p>
    					<p>erewtrwerwer</p>
    					<p>erewtrwerwer</p>
    					<p>erewtrwerwer</p>
    					<p>erewtrwerwer</p>
    					<p>erewtrwerwer</p>
    					<p>erewtrwerwer</p>
    					<p>erewtrwerwer</p>
    					<p>erewtrwerwer</p>
    				</div>
    			</ScrollInfinito>
    		</section>
    	</div>
    );
  }
}