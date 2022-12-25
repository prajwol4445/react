import React, { Component } from 'react'
const details = {
    employee : {
        name: "prajwol",
        id: "AB20",
        address: "ramkot, kathmandu, Nepal",
    },
    family: {
        id: "onlySon",
        occupation: "student", 
        age: 22,
    }
}
export default class Destructuring extends Component {
  render() {
    const{employee} = details;
    const{name, id, address} = employee; 
    return (
      <div>
        <h1>{` and the data of details is ${name} `}</h1>
        <h1>{details.name}</h1>
      </div>
    )
  }
}
