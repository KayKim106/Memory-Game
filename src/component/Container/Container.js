import React from "react";

const style ={
	wrapper:{
		width:"80%",
		height:"500px",
		margin:"0 auto"
	}
}
const Container =props=>(

	<div className="container" style={style.wrapper}>
		{props.children}
		</div>
	);

	export default Container;