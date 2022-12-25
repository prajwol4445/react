// if we have multiple input fields in the page and we have to place a courser in particular input field so that user don't have to chick 
// on it but can directly fill up the form then it we use REFS. we have to declear it inside constructor like this.name = createRed.
// then we use it in any input field like ref = {this.refname} we also have to use focus keyword inside a fuction which is run at render 
// time and use this.refsname.current.focus

import React, { Component } from 'react'
export default class RefsExample extends Component {
    constructor(props) {
      super(props)
      this.highlight = React.createRef()
    }
    componentDidMount = () =>{
        this.highlight.current.focus()
    }
    showWhatIsWritten = () =>{
        alert(this.highlight.current.value)
    }
  render() {
    return (
      <div>
         enter your surname :   
        <input ref={this.highlight}></input>
        <br></br>
        enter your name :   
        <input ref={this.highlight}></input>
        <br></br>
        enter your age :   
        <input ref={this.highlight}></input>
        <br></br>
        <button onClick={this.showWhatIsWritten}>submit</button>
      </div>
    )
  }
}
