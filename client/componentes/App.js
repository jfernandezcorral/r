import React from 'react';
import estilos from'./App.scss';
import Comercial from './comercial/Comercial';
import ScrollInfinito from 'cmp/base/ScrollInfinito';
import {modal} from 'cmp/base/modal';
export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.handle = this.handle.bind(this)
    }
    handle(e){
        modal()
    }
    render() {
        return (
        	<div style={{height: '100%', display: 'flex'/*, alignItems: 'stretch'*/}}>
        		<aside style={{width: '30%', marginRight: '5px'}} className={estilos.panel}>
        			<Comercial/>
        		</aside>
        		<section style={{width: '70%'}} className={estilos.panel}>
                    <ScrollInfinito onTop={(i)=> console.log(i)}>
        				<div>
        					<a onClick={this.handle}>dfasf</a><br/>
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