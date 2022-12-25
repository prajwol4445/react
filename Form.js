import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: "",
         course: ""
      }
    }
    onChangeFunction = (event) =>{
        this.setState({
            username: event.target.value
        })
    }
    courseHandaler = (event) =>{
        this.setState({
            course: event.target.value
        })
    } 
    showData = (event) =>{
        alert(`hello ${this.state.username}, you have chose: ${this.state.course}`)
        event.preventDefault();
    }
  render() {
    return (
      <form>
      <div>
        <br></br>
        <label>username :   </label>
        <input type= "text" value = {this.state.username} onChange={this.onChangeFunction}></input>
      </div>
      <div>
        <br></br>
        select cource title :
        <select value={this.state.course} onChange={this.courseHandaler}>
            <option value="python" >python</option>
            <option value="javascript">javascript</option>
            <option value="java">java</option>

        </select>
        <br></br>
        <button onClick={this.showData}>submit</button>

      </div>
      </form>
    )
  }
}
