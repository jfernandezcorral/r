import React from 'react';
import estilos from'./App.scss';
import Comercial from './comercial/Comercial';
import ScrollInfinito from 'cmp/base/ScrollInfinito';
//import {modal} from 'cmp/base/modal';
//import {menu} from 'cmp/base/menu';
import {modal, menu} from 'reactcomponent'
export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.handle = this.handle.bind(this)
        this.handleimg = this.handleimg.bind(this)
    }
    handle(e){
        const diag = <div style={{width: '500px'}}>
            <h1>Se va a enviar el formulario al servidor</h1>
            <div style={{display: 'flex'}}>
                <button onClick={()=>{console.log('hola');this.cerrar()}}>Aceptar</button>
                <button onClick={()=>this.cerrar()}>Cancelar</button>
            </div>
        </div>
       this.cerrar = modal(diag)
    }
    handleimg(e){
        menu([
                {t: 'opción 1', cb: () => console.log('opcion1')},
                {t: 'opción 2', cb: () => console.log('opcion2')}
            ], e
        )
    }
    render() {
        return (
        	<div style={{height: '100%', display: 'flex'/*, alignItems: 'stretch'*/}}>
        		<aside style={{width: '30%', marginRight: '5px'}} className={estilos.panel}>
        			<Comercial/>
        		</aside>
        		<section style={{width: '70%'}} className={estilos.panel}>
                    <ScrollInfinito onTop={(i)=> console.log(i)}>
        				<div style={{position: 'relative'}}>
        					<a onClick={this.handle}>Abrir dialogo</a><br/>
                            <img style={{position: 'absolute', right: '10px'}} src="client/img/k.png" onClick={this.handleimg}/>
                            <p>erewtrwerwer</p>
        					<p>erewtrwerwer</p>
        					<p>erewtrwerwer</p>
        					<p>erewtrwerwer</p>
                            <img src="client/img/k.png" onClick={this.handleimg}/>
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