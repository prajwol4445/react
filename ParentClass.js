import React, { Component } from 'react'
import ChildFunction from './ChildFunction'

export default class ParentClass extends Component {
  constructor(props) {
    super(props)

    this.state = {
      saying: ""
    }
    this.message = this.message.bind(this)
  }
  message(name, special) {
    this.setState({
      saying: "thank you for clicking on greading"
    })
    alert("thank you for clicking on greading" + name + special)
  }
  render() {
    return (
      <div>
        <h1>{this.state.saying}</h1>
        <ChildFunction action={this.message} />

      </div>
    )
  }
}
