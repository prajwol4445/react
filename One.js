import React, { Component } from 'react'
// import ConditionalRendering from './ConditionalRendering'
import Home from './Home'
import ListRendering from './ListRendering'
// import ParentClass from './ParentClass'

export default class One extends Component {
  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
  }
  onclickFunction(){
    this.setState ({
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <div>
        <Home name = "Prajwol " first = "Home" second = "Text Editor" />
        <ListRendering />
        {/* <ParentClass /> */}
        {/* <ConditionalRendering /> */}
        <h1> total number of clicks : {this.state.count} </h1>
        <button onClick={() => this.onclickFunction()}>click </button>
      </div>
    )
  }
}
