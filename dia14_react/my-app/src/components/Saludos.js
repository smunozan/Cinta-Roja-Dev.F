import React, { Component } from 'react';

class Saludos extends Component {

	constructor(props){
		super(props);
		console.log("Llamo al constructor")
		this.state = {
			name: props.nombre
		}
	}

	render(){
		console.log("Llamo al render")
		return (
			<div>
				<h4>Hola {this.state.name} soy un componente</h4>
			</div> 
		);
	}
}

export default Saludos;