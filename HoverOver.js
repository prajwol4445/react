import React, { Component } from 'react'

export default class HoverOver extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
   Incrimenter(numb){
    this.setState(previousState=>{
        return {count: previousState.count + numb}
    })
   }
  render() {
    return (
      <div>
        <h1 onMouseOver={()=>this.Incrimenter(10)}>Total Hover: {this.state.count} </h1>
      </div>
    )
  }
}
