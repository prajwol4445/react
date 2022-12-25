// in react we have to inbound all the element in single tag so we use a div tag in begining but if that div tag is not necessary 
// we can use (REACT.FRAGMENTS) which will eliminate the extra div tag in our DOM like if we are importing anohter component in 
// our html tags and if we cannot have and div tag inside that html tag like in table tr tags 
// we can use empty tags <></> which have one downside that we can not use key value in it.
import React from 'react'
import FragmentChild from './FragmentChild'
export default function Fragments() {
  return (
    <table>
        <tbody>
            <tr>
                <FragmentChild />
            </tr>
        </tbody>    
    </table>
  )
}
