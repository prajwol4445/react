// this is to show that the order of execuition of function in component that is after the render function the constructor(), 
// getDerivedStateFromPops(), render() is execuitated only then the componentDidMount is executed
import React, { Component } from 'react'
export default class MountChild extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         first: ""
      }
      console.log("one");
    }
    static getDerivedStateFromProps(props, state){
        console.log("two");
        return null;
    }
    componentDidMount(){
        console.log("four");
    }
  render() {
    console.log("three");
    return (
      <div>MountChild</div>
    )
  }
}
