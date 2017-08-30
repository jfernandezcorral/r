import React, {Children} from 'react'
import PropTypes from 'prop-types'
export default class ScrollInfinito extends React.Component {
	constructor(props) {
    	super(props)
    	this.scroll = null
    	this.panel = null
    	this.anteriorTop = 0
    	this.handleScroll = this.handleScroll.bind(this)
  	}
  	render() {
    	const {children, estilo} = this.props
    	return (
    		<div style={estilo} ref='s'>
    			{Children.only(children)}
    		</div>
    	)
  	}
  	componentDidMount(){
  		this.scroll = this.refs.s
  		this.panel = this.scroll.firstChild
  		this.scroll.addEventListener('scroll', this.handleScroll)
  	}
  	componentWillUnmount() {
    	this.scroll.removeEventListener('scroll', this.handleScroll)
  	}
  	handleScroll() {
  		if (this.panel.offsetHeight - this.scroll.offsetHeight <= this.scroll.scrollTop){
  			if (Math.abs(this.anteriorTop-this.scroll.scrollTop)<2){
	  			return
	  		}
	  		else{
	  			this.anteriorTop = 0
	  		}
  			this.props.onTop(this.scroll.scrollTop)
  			this.anteriorTop = this.anteriorTop? this.scroll.scrollTop: 0;
  		}
  	}
}

ScrollInfinito.propTypes = {
 	estilo: PropTypes.object,
 	children: PropTypes.element.isRequired,
 	onTop: PropTypes.func.isRequired
}

ScrollInfinito.defaultProps = {
    estilo: {
    	overflowY: 	'auto',
    	height: 	"100%", 
    }
}
