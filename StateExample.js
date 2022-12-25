import { isDisabled } from '@testing-library/user-event/dist/utils';
import React, { Component } from 'react'

export default class StateExample extends Component {
  constructor(){
    super()
    this.state = {
      count: 0,
      triger: "incriment",
      message: ""
    }
    
  }
  subscribe(){
    this.setState((previousState)=> ({
      count: previousState.count + 1
    }))
    // this.setState({
    //   count: this.state.count + 1, 
    // }
    // )
    // setInterval(() => {
    //   this.setState({
    //     triger: ""
    //   })
    // }, 2000);
    // setInterval(() => {
    //   let total = this.state.count 
    // }, 2100);
  }
  IncrimentFive(){
    this.subscribe();
    this.subscribe();
    this.subscribe();
    this.subscribe();
    this.subscribe();

  }
  render() {
    const{count} = this.state.count;
    return (
      <div>
        <h1>count : {this.state.count}</h1>
        <h1>{this.total} </h1>
        <button onClick={()=> this.IncrimentFive()}>{this.state.triger}</button>
      </div>
    )
  }
}
