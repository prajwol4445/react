import React, { Component } from 'react'
import ListRenderingChild from './ListRenderingChild'

export default class ListRendering extends Component {
  render() {
    let detail = [
        {
            id: 1,
            name: "prajowl",
            age: 22,
            occupation: "sutdent"
        },
        {
            id: 2,
            name: "ganesh",
            age: 55,
            occupation: "worker"
        },
        {
            id: 3,
            name: "sita", 
            age: 45,
            occupation: "house wife"
        },
        {
            id: 4,
            name: "pushpa",
            age: 30,
            occupation: "house wife"
        },
        {
            id: 5,
            name: "mamta",
            age: 23,
            occupation: "student and financer"
        }
    ]
    const data = detail.map(datas => 
        <ListRenderingChild key={datas.id} props = {datas} />
    )
    return (
      <div>
            {data}
      </div>
    )
  }
}
