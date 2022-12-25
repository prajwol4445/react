import React, {useState} from 'react'

export default function FunctionalComponent({name, children} ) {
    const [wife, setwife] = useState('joshana subedi')
    function changeWife() {
        setwife("joshana subedi shrestha")
    }
  return (
    <div>
        <h1>this is {name} and my wife is : {wife}</h1>
        {children}
        <button onClick={changeWife}>change wife</button>
    </div>
  )
}
