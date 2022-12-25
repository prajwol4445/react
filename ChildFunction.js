import React from 'react'

export default function ChildFunction(props) {
  return (
    <div>
      <button onClick={() => props.action(" prajwol ", " and its working")}> Greeding </button>
    </div>
  )
}
