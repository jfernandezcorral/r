import React from 'react'
import ReactDOM from 'react-dom'
import estilo from './modal.scss'

export const modal = (comp) => {
	const body = document.getElementsByTagName('body')[0]
	const div = document.createElement("div")
	body.appendChild(div)
	div.style.position = 'fixed'
	div.style.top = '0px'
	div.style.height = '100%'
	div.style.width = '100%'
	//div.id = 'x_x'
	const cmp = <div>
		<div className={estilo.t} style={{position: 'absolute', top: '0px', width: '100%', height: '100%', backgroundColor: 'black'}}></div>
		<div onClick={cerrar} style={{position: 'absolute', top: '0px', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}>
			<div className={estilo.popup} onClick={(e)=>e.stopPropagation()}>
				{comp}
			</div>
		</div>
	</div>
	ReactDOM.render(cmp, div)
	function cerrar(){
		setTimeout(
			()=>{
				//const div = document.getElementById('x_x')
				ReactDOM.unmountComponentAtNode(div)
				div.remove()
			}
		,0)
	}
	return cerrar
}

