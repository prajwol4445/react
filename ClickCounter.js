import React, { Component } from 'react'
import Home from './Home';
export default class ClickCounter extends Component {
  constructor(props) {
    super(props)
    this.state = {
       count : 0,
       button : "Increase",
       FinalScore: null
    }
  }
  IncreaseCount(){
    this.setState({   
      count : this.state.count + 1,
    })
    setInterval(() => {
      this.setState({
        button : null,
        FinalScore: `your total clicks are ${this.state.count}`
      })
    }, 10000);
  }
  render(){
    return(
    <div>
      <Home name = "Prajwol " first = "Home" second = "Text Editor" />
      <h1 >You get 10 second lets see how many time you can click</h1>
      <br></br>
      <h2> Total Clicks:  {this.state.count}</h2>
      <button onClick = {()=> this.IncreaseCount()} > {this.state.button} </button>
      <h1>{this.state.FinalScore}</h1>
    </div>  
    )
  }
}
