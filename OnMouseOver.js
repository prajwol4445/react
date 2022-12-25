import React, { Component } from 'react'

export default class OnMouseOver extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    mouseOverCount = () =>{
        this.setState({
            count : this.state.count +1 
        })
    }
  render() {
    return (
      <div>
        <button onMouseOver = {()=>{this.mouseOverCount()}}>Total Mouse Hover : {this.state.count}</button>
      </div>
    )
  }
}
