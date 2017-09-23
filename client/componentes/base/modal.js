import React from 'react'
import ReactDOM from 'react-dom'
import estilo from './modal.scss'

export const modal = (props, comp) => {
	const body = document.getElementsByTagName('body')[0]
	const div = document.createElement("div")
	body.appendChild(div)
	div.style.position = 'fixed'
	div.style.top = '0px'
	div.style.height = '100%'
	div.style.width = '100%'
	const cmp = <div>
		<div className={estilo.t} style={{position: 'absolute', top: '0px', width: '100%', height: '100%', backgroundColor: 'black'}}></div>
		<div onClick={cerrar} style={{position: 'absolute', top: '0px', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}>
			<div className={estilo.popup}>
				<h1 style={{backgroundColor: 'white'}}>hola</h1>
			</div>
		</div>
	</div>
	ReactDOM.render(cmp, div)
	function cerrar(){
		ReactDOM.unmountComponentAtNode(div)
		div.remove()
	}
}

