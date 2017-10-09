import React from 'react'
import ReactDOM from 'react-dom'
import estilo from './menu.scss'

export const menu = (items, e) => {
	const onscroll = (z) => {
		const boundingRect = target.getBoundingClientRect()
		div.style.top = `${boundingRect.top + boundingRect.height}px`
		div.style.left = `${boundingRect.left}px`
	}
	const body = document.getElementsByTagName('body')[0]
	const div = document.createElement("div")
	const target = e.target
	body.appendChild(div)
	onscroll()
	div.style.position = 'fixed'
	div.style.height = '30px'
	div.style.width = '30px'
	div.style.backgroundColor = '#777'
	window.addEventListener('scroll', onscroll, true)
	/*const cmp = <div>
		<div className={estilo.t} style={{position: 'absolute', top: '0px', width: '100%', height: '100%', backgroundColor: 'white'}}></div>
		<div onClick={cerrar} style={{position: 'absolute', top: '0px', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}>
			<div className={estilo.popup} onClick={(e)=>e.stopPropagation()}>
				{comp}
			</div>
		</div>
	</div>
	ReactDOM.render(cmp, div)
	const velo = div.firstChild.firstChild
	const popup = div.firstChild.children[1].firstChild
	function cerrar(){
		velo.style.opacity = 0
		popup.style.transform = "scale(0.1)"
		setTimeout(
			()=>{
				ReactDOM.unmountComponentAtNode(div)
				body.removeChild(div)
			}
		,300)
	}
	return cerrar*/
}