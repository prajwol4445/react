import React from 'react'

export default function ErrorBoundry({message}) {
    if(message == "bad"){
      message = "invalid input";
    }
  return (
    // <div>{this.message}</div>
    <h1>
      Error aboundry is working properly <br></br>
        {message}
    </h1>
  )
}
