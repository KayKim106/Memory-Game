import React, { Component } from 'react';

import Navbar from "./component/Navbar/Navbar";
import Banner from "./component/Banner/Banner";
import Main from "./component/Main/Main";
import Wrapper from "./component/Wrapper/Wrapper";
import images from "./images.json";
import Container from "./component/Container/Container";
class App extends Component {
    state = {
        images:images,
        score:0,
        topscore:0,
        clicks:"false",
        clickedImages:[]
        
    };

//returning clicked images's id number 
    clicked = id=>{
        
                     this.state.clickedImages.push(id); //adding clicked images id to clickedimages array
                     console.log(id+"'s bool is "+ this.state.clicks);
                     this.Shuffle(images);  //images shuffling 
                         for(let i=0; i<this.state.clickedImages.length; i++) //looping clickedimages array
                            {
                                /*console.log(this.state.clicked);*/ //image's clicked status
                                /*console.log("this is clicked id:"+id)*/
                             console.log(this.state.clickedImages[i]);

                             //testing for the same image clicks
                            if(this.state.clickedImages[i]===id) //i is looping but i need to find when the image clicked as same one
                                {
                                console.log("It's the same!");
                                }
                            }
                        if(this.state.score<9)
                            {
                            this.setState({score:this.state.score+1});
                        
                             } 
                        else if(this.state.score>=9) 
                            {
                            alert("You win the Game");
                            this.setState({score:0});
                            }
                    };
                        Shuffle = array => 
                        {
                          for (let i = array.length - 1; i > 0; i--) {
                          let j = Math.floor(Math.random() * (i + 1));
                          [array[i], array[j]] = [array[j], array[i]];
                        }
  };
  reset=()=>{

  }

     boolchange = clicks =>{

     }

    render() {
     
        return ( <Wrapper >
           		 <Navbar score={this.state.score} topscore={this.state.score} / >
         		 <Banner / >
                 <Container>
            {
                this.state.images.map(chracters => (
	                 <Main image = { chracters.image } 
	                       key = { chracters.id }
	                       id={chracters.id}
	                       click={this.imageclicked}
                           onRemove={this.clicked}

                       />
                ))
            } 
            </Container>
            </Wrapper>
        );
    }
}

export default App;