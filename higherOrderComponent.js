import React from "react";

const NewFunction = OriginalComponent => {
    class NewClass extends React.Component{
        constructor(props) {
            super(props)
          
            this.state = {
               count: 0
            }
        }
        IncreaseCount = ()=>{
            this.setState({
                count: this.state.count + 1
            })
        }
        render(){
            return <OriginalComponent number = {this.state.count}  func = {this.IncreaseCount} />
        }
    }
    return NewClass
}
export default NewFunction