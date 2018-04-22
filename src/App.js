import React, { Component } from 'react';

import Navbar from "./component/Navbar/Navbar";
import Banner from "./component/Banner/Banner";
import Main from "./component/Main/Main";
import Wrapper from "./component/Wrapper/Wrapper";
import images from "./images.json";
class App extends Component {
    state = {
        images:images,
        score:0,
        topscore:0,
        clicked:"false",
        clickedImages:[]
        
    };


 
    imageclicked =propsData=>{

    	//if socre is less than 10, score + 1
    	if(this.state.score<10){
        	this.setState({score:this.state.score+1});
            console.log(this.removeImages);
    		//find the clicked images's id and changed the clicked's status to true
    	}
    	else if(this.state.score>=10) {
    		alert("You win the Game");
    		this.setState({score:0});

    	}	    	
    }
    imageid =id=>{
        console.log(id);
        this.setState({
            images:this.state.images.filter( image=>image.id!==id)
        })
        };

    render() {
      
        return ( <Wrapper >
           		 <Navbar score={this.state.score} topscore={this.state.score} / >
         		 <Banner / >
               

            {
                this.state.images.map(chracters => (
	                 <Main image = { chracters.image } 
	                       key = { chracters.id }
	                       id={chracters.id}
	                       click={this.imageclicked}
                           onClicked={this.imageid}
                          
	            
                       />
                ))
            } 
            </Wrapper>


        );
    }
}

export default App;