import React from "react";

const style ={
	ulstyle:{
	
		listStyle:"none",
		float:"right",
		marginRight:"150px",
	},
	navStyle:{
		height:"100px",
		background:"#eee",
		boxShadow:"0 2px 10px 0px"
	}
	
}
const Navbar =props=>(
	
		<nav className ="navbar navbar-expand-lg navbar-light bg-light" style={style.navStyle}>
			<ul className ="navbar-nav" style={style.ulstyle}>
				<li className ="nav-link">Score : {props.score} | Top Score :{props.topscore}</li>
			</ul>
		</nav>
			);



	export default Navbar;