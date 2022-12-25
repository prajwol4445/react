import React, { Component } from 'react'
export default class ConditionalRendering extends Component {
    constructor(props) {
      super(props)
      this.state = {
         message: true
      }
    }
  render() {  
    // using element variable
    let saying  
    if(this.state.message){
      saying = "welcome prajwol since condition is true"
    }
    else{
      saying = "welcome guest sicne condition is false"
    }
    return(
      <div>
        <h1> {saying}</h1>
      </div>
    )
    //using short circuit operation
    // return this.state.message && <h1>welcome prajwol</h1>

    //if else condition
    // if(this.state.message){
    //     return(
    //     <div>
    // <h1>            welcome prajwol </h1>
    //     </div>
    //     )
    // }
    // else{
    //     return (
    //     <div>
    //      <h1> Welcome guest </h1>
    //       </div>
    //     )
    // }

    //ternary operation
    // return this.state.message?
    // <div>
    //   <h1> Welcome prajwol</h1>
        
    //     </div>:
    // <div> 
    //   <h1> Welcome guest </h1>
    //   </div>
     
  }
}
