import React from 'react'

function Alert(props) {
  return (
           props.message && <div className={`alert alert-${props.message.type} alert-dismissible fade show`} role="alert">
           {props.message.type  } {props.message.message}
        </div>
 
  )
}

export default Alert