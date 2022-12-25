// in react when we update our data through either props or state we have to re-render our data of that page so to do that
// in react updating have five steps among them only three are usually useful others are not and they are in order of 
// static getDeriverStateFromProps(props, state)
// shouldComponentUpdate(props, update)
// render()
// getSnapshotBeforeUpdate(nextProps, nextState)
// componentDidupdate(nextProps, nextState, snapshot)

import React, { Component } from 'react'
export default class Update extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         first: "prajowl"
      }
    }
    static getDerivedStateFromProps(props, state){
        console.log("one.....");
        return true
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log("two.......");
    }
    getSnapshotBeforeUpdate(nextProps, nextState){
        console.log("four....");
    }
    componentDidUpdate(nextProps, nextState){
        console.log("five........");
    }
    changeState = () => {
        this.setState({
            first: "shrestha" 
        })
    }
  render() {
    return (
      <div>
        <h1>direct message form update Cycle phase </h1>
        <button onClick={this.changeState}> change state </button>
      </div>
    )
  }
}
