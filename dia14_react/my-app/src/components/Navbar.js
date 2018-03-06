import React, {Component} from 'react';
import Logo from './Logo';
import Menu from './Menu';
import Search from './Search';



class Navbar extends Component {

	render(){

		return(
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
			  <Logo/>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
			  		<Menu/>
			  		<Search/>
				</div>
			</nav>
		);
	}

}

export default Navbar;