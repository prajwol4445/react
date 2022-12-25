import React, { Component } from 'react'
import FunctionalComponent from './FunctionalComponent';
import Home from './Home';
export default class Two extends Component {
  constructor(props){
    super(props)
   
    this.state = {
    noOfClicks: 0,    
      imageName: "me.jpg",
      otherwise: "error for first image", 
      image: "image one "
    }
    this.clicked = this.clicked.bind(this);
  }
    clickFunction() {
      this.setState((previsouValue) => ({
       noOfClicks : previsouValue.noOfClicks + 1
      }), ()=>{      console.log(this.state.noOfClicks);
      })
      console.log("tinital clicks", this.state.noOfClicks);
    }
    
    imageChange(){
      setTimeout(() => {
        this.setState({
          imageName: "prajwol.jpg",
          otherwise: "error for second image"
        })
      },3000 );
      setTimeout(() => {
        this.setState({
          imageName: "me.jpg",
          otherwise: "error for second image"
        })
      },2000  );
    }
    incrimentFive(){
      this.clickFunction();
      this.clickFunction();
      this.clickFunction();
      this.clickFunction();
      this.clickFunction();
    }
    clicked(){
      this.setState({
        image: "image one changed" 
      })
    }
  render() {
    return (
      <div onLoad={()=>this.imageChange()}>
        <Home name = "Prajwol " first = "Home" second = "Text Editor" />
       {/* <FunctionalComponent /> */}
        {/* <h1>Total Number of Clicks: {this.state.noOfClicks}</h1> */}
        {/* <button onClick={()=>this.incrimentFive()}>click</button> */}
        <div>
          <br></br>
        <img src={this.state.imageName} height="500px" width='400px' alt={this.state.otherwise}></img>
        </div>
        <br></br> 
        {/* <button onClick ={this.clicked}> click here to change the image, {this.state.image}</button> */}
        
      </div>
    )
  }
}
