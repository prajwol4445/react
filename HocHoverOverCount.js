import React, { Component } from 'react'
import NewFunction from './higherOrderComponent'
class HocHoverOverCount extends Component {
  render() {
    return (
      <div>
        <h1>Total Hover Over is:   {this.props.number}</h1>
            <button onMouseOver={this.props.func}> Hover over men </button>
      </div>
    )
  }
}
export default NewFunction(HocHoverOverCount)
