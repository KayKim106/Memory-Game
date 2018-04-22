import React from "react";

const style ={
	boxsize:{
		width:"150px",
		height:"200px",
		border:"1px solid black"
		
	},
	display:{
		display:"inline-block",
		width:"200px",
		marginTop:"20px",
		cursor:"pointer"
	
	}



}

const Main=props=>(
	
		<div className="imagebox" style={style.display}>
		<img src={props.image} alt={props.id} style={style.boxsize} onClick={props.click} />
	
		</div>
	
	);



	export default Main;



