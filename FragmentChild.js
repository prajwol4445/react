// here if we use div tag instead of react.Fragment then there will be a div tag in tr tag which in not good 
// so instead of div as a parrent tag we have to use either empty tag <></> or react.Fragment but if we have to use key in its 
// attributs we have to use React.Fragment
import React from 'react'
export default function FragmentChild() {
  return (
    <React.Fragment>
        <td>prajwol</td>
        <td>sita</td>
    </React.Fragment>
  )
}
