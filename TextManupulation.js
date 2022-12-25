import React, { useState } from 'react'
import App from '../App';
import Alert from './Alert';
import Home from './Home';

export default function TextManupulation() {
  const upperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    showMessage("converted to uppercase sucessfully", "success");
    setTimeout(() => {
      showMessage(null);
    }, 2000);
  }
  const lowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    showMessage("converted to lowercase sucessfully", "success");
    setTimeout(() => {
      showMessage(null);
    }, 2000);

  }
  const change = (event) => {
    setText(event.target.value)
  }
  const [text, setText] = useState("enter text here")
  const [mode, setMode] = useState({
    color: "whitesmoke",
    backgroundColor: "black"
  })
  const theme = () => {
    if (mode.color === "whitesmoke") {
      setMode({
        color: "black",
        backgroundColor: "whitesmoke"
      })
      showMessage("light mode enabled sucessfully", "success");
      setTimeout(() => {
        showMessage(null);
      }, 2000);
    }
    else {
      setMode({
        color: "whitesmoke",
        backgroundColor: "black"
      })
      showMessage("dark mode enabled sucessfully", "successx");
      setTimeout(() => {
        showMessage(null);
      }, 2000);

    }

  }
  const [message, setmessage] = useState();
  const showMessage = (message, type) => {
    setmessage({
      message: message,
      type: type
    })
  }
  return (
    <div className='all' style={mode}>
      <Home name="Prajwol" first="Home" second="TextEditor" style={mode}></Home>
      <Alert message={message}></Alert>
      <h1 style={mode}>Text Editor</h1>
      <textarea style={mode} value={text} cols="150" rows="9" onChange={change}></textarea>
      <h4 style={mode}>total characters : {text.length}</h4>
      <h4 style={mode}>total words : {text.split(" ").filter((element) => { return element.length != 0 }).length}</h4>
      <button style={mode} onClick={upperCase}>ToUpperCase</button>
      <button style={mode} onClick={lowerCase} >ToLowerCase</button>   <br></br> <br></br>
      <button style={mode} onClick={theme}>Change Mode</button>
    </div>
  )
}
