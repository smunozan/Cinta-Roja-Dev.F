import React, { Component } from 'react';

class Numeros extends Component {

	constructor(props){
		super(props);
		console.log("Llamo al constructor")
		this.state = {
			number: props.numero
		}
	}

	render(){
		console.log("Llamo al render")
		return (
			<div>
				<h4>Estas en el numero {this.state.number}</h4>
			</div> 
		);
	}
}

export default Numeros;
