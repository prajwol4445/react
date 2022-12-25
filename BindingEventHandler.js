import React, { Component } from 'react'

export default class BindingEventHandler extends Component {
    constructor(){
        super()
        this.state = {
            message: "Hello user please subscribe"
        }
        // binding in constructor
        this.subscribe = this.subscribe.bind(this)
    }
    // subscribe(){
    //     this.setState({
    //         message: "thank you for subscribing "
    //     })
    // }

    // by creating arrow function
    // }
    subscribe = () => {
        this.setState({
            message: "thank you for subscribing "
        })
    }
  render() {
    return (
      <div>
        <h1> {this.state.message} </h1>

        {/* binding in render */}
        {/* <button onClick={this.subscribe.bind(this)}> subscribe </button> */} 

        {/* using arrow function in render  */}
        {/* <button onClick={()=> this.subscribe()}> subscribe </button>  */}

        {/* binding in constructor */}
        {/* <button onClick={this.subscribe}> subscribe </button>  */}

        {/* binding using arrow function */}
        <button onClick={this.subscribe}> subscribe </button> 

      </div>
    )
  }
}
