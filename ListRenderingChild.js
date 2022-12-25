import React from 'react'

export default function ListRenderingChild({props}) {
  return (
    <div>
        <h2>
            ID NO: {props.id} hello everyone i am {props.name} and i am {props.age} years old and i am a {props.occupation}
        </h2>
    </div>
  )
}
