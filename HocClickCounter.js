import React, { Component } from 'react'
import NewFunction from './higherOrderComponent'

class HocClickCounter extends Component {
  render() {
    return (
      <div>
        <h1> Total Clikcs are :   {this.props.number} </h1>
            <button onClick={this.props.func}> click me</button>
        </div>
    )
  } 
}
export default NewFunction(HocClickCounter) 
