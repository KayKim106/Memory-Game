import React from "react";

const style ={
	boxsize:{
		width:"150px",
		height:"200px",
		border:"1px solid black"
		
	},
	display:{
		display:"inline-block",
		width:"150px",
		cursor:"pointer",
		margin:"20px 50px 0 0",
		
	
	}



}

const Main=props=>(
		
		<div className="imagebox" style={style.display} >
		<img src={props.image} alt={props.name} style={style.boxsize} onClick={()=>{props.onRemove(props.id)}} />
		
		</div>
	
	);



	export default Main;



