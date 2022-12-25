// in react whenever there is change in UI the component re-render it either because of change in props or state but there are 
// some condition where value are changing but that do not effect the UI so at that time we don't have to rernder the component which 
// is side effect we use useEffect HOOK to use this sideeffect 
import React from 'react'
import { useState, useEffect } from 'react'

export default function SideEffect() {
    let[message, setmessage] = useState("button");
    console.log("component rerender");
    useEffect(()=>{ //here if we chicked on a button but if the value is same then it do not write in console it only execute if
        //the value of message is change 
        console.log(message);
    }, [message]);
  return (
    <div>
      <br></br>
    <button onClick={()=>{setmessage('Button one clicked')}}> Button one </button>
    <button onClick={()=>{setmessage('Button two clicked')}} > Button two </button>
    <button onClick={()=>{setmessage('Button three clicked')}} > Button three </button>
    <h1> {message}</h1>
  </div>
  )
}
