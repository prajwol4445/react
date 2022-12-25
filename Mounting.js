//here it shows how the different function of a component works in order
// here first of all the constructor function is execute 
// second getDerivedStateProps() is executed and then
// third the render function() after that
// at last or at forth the componentDidMount() function is executed
import React, { Component } from 'react'
import MountChild from './MountChild';
export default class Mounting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         first: ""
         
      }
      console.log("1");
    }
    static getDerivedStateFromProps(props, state){
        console.log("2");
        return null
    }
    componentDidMount(){
        console.log("4");
    }
  render() {
    console.log("3");
    return (
      <div>
        <MountChild />
        Mounting 
      </div>
    )
  }
}
