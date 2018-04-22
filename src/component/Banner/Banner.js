import React from "react";
const style ={
	textStyle:{
		margin:"0 auto",
		textAlign:"center"
	}
}
const Banner =props =>(

	<div className="jumbotron" style={style.textStyle}>
		<h2>Memory Game!</h2>
		<p>Click any image you want but, do not click the same images</p>
	</div>
	);

export default Banner;
