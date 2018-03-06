import React, {Component} from 'react';

class Logo extends Component {

	render(){
		return(
			<div>
				<a className="navbar-brand" href="#">Navbar</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			 	 <span className="navbar-toggler-icon"></span>
				</button>
			</div>
			)
	}

}

export default Logo;
