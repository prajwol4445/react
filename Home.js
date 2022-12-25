import React, { PureComponent, useState } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Alert from './Alert';
import ConditionalRendering from './ConditionalRendering';
import Functional from './FunctionalComponent';
import ClassComponent from './ClassComponent';
import StateExample from './StateExample';
import BindingEventHandler from './BindingEventHandler';
import ParentClass from './ParentClass';
import ListRendering from './ListRendering';
import Destructuring from './Destructuring';
import Form from './Form';
import Mounting from './Mounting';
import Update from './Update';
import Fragments from './Fragments';
import PureComponentExample from './pure_component_example/PureComponentExample';
import NormalChildClass from './pure_component_example/NormalChildClass';
import MainClass from './pure_component_example/MainClass';
import RefsExample from './RefsExample';
import ErrorBoundry from './ErrorBoundry';
import StateLessFunction from '../StateLessFunction';
import ErrorBoundryMain from './ErrorBoundryMain';
import OnMouseOver from './OnMouseOver';
import HocClickCounter from './HocClickCounter';
import HocHoverOverCount from './HocHoverOverCount';
import HOCClick from './higherOrderComponent/HOCClick';
import HOCHover from './higherOrderComponent/HOCHover';
import MainComponent from './RenderProps/MainComponent';
import RPClickCounter from './RenderProps/RPClickCounter';
import RPHoverCounter from './RenderProps/RPHoverCounter';
import ClickCounter from './ClickCounter';
import HoverOver from './HoverOver';

export default function Home(props) {
    const [alertMessage, setalertMessage] = useState(null)
    const [first, setfirst] = useState({
        name: "prajwol",
        surname: "shrestha"
    })
    const [mode, setMode] = useState({
        color: "whitesmoke",
        backgroundColor: "black",
    }
    )
    
    const changeName = () =>{
            setfirst({
                name : "name changed",
                second : "surname changed"
            })
            setInterval(() => {
                setfirst({
                    name: 'prajwol',
                    second: "shrestha"
                })
            }, 3000);
    }

    const theme = () => {
        if (mode.color === "whitesmoke") {
            setalertMessage("light mode activated");
            setMode({

                color: "black",
                backgroundColor: "whitesmoke",
            })
            setInterval(() => {
                setalertMessage(null);
            }, 2000);
        }
        else {
            setalertMessage("dark mode activated");

            setMode({
                color: "whitesmoke",
                backgroundColor: "black"
            })
            setTimeout(() => {
                setalertMessage(null);
            }, 2000);
        }
        
    }
    

    return (
        
        <>
    <nav className="navbar navbar-expand-lg" style={mode}>
                <div className="container-fluid" style={mode}>
                    <Link style={mode} className="navbar-brand" to="/one">{props.name}</Link>
                    <button style={mode} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span style={mode} className="navbar-toggler-icon"></span>
                    </button>
                    <div style={mode} className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul style={mode} className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link style={mode} className="nav-link active" aria-current="page" to="/two">{props.first}</Link>
                            </li>
                            <li className="nav-item">
                                <Link style={mode} className="nav-link" to="/three">{props.second}</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a style={mode} className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/ClickCounter">click counter</Link></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a style={mode} className="nav-link disabled">Disabled</a>
                            </li>
                        </ul>
                        <form style={mode} className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                    <button style={mode} onClick={theme}>Change Mode</button>

                </div>
            </nav>
            {/* <h1>this is direct message form {first.name} and he is {first.second}</h1> */}
                {/* <button onClick={changeName}>click here to change the </button> */}
                {/* <ConditionalRendering />
                <Functional name = "chudamani">
                    <h1>this is a paragraph from functional component with optional data</h1 >
                </Functional>  
                <ClassComponent message = "joshana" /> */}
                {/* <StateExample /> */}
                {/* <BindingEventHandler /> */}
                {/* <ClassComponent /> */}
                {/* <ParentClass /> */}
                {/* <ConditionalRendering /> */}
                {/* <ListRendering /> */}
                {/* <Destructuring /> */}
                {/* <Form /> */}
                {/* <Mounting /> */}
                {/* <Update /> */}
                {/* <Fragments /> */}
                {/* <MainClass /> */}
                {/* <RefsExample /> */} 
                {/* <ErrorBoundry /> */}
                {/* <StateLessFunction></StateLessFunction> */}
                {/* <ErrorBoundry message = {20 + 10    } />
                <OnMouseOver></OnMouseOver> */}
                {/* <HocClickCounter />
                <HocHoverOverCount /> */}
                {/* <HOCClick name = "prajwol" />
                <HOCHover name = "joshana" /> */}
                {/* <ClickCounter /> */}
                {/* passing value of props */}
               <MainComponent render={(count, Incriment)=>(
                <RPClickCounter  Incriment = {Incriment} count = {count} />
               )} />
               <MainComponent render={(count, Incriment) => (
                    <RPHoverCounter  Incriment = {Incriment}  count = {count} />
               )} 
               />
               <HoverOver />
            </> 
    )
    
} 
Home.defaultProps = {
    name: "get it as name",
    first: "get it as first",
    second: "get it as second"
}
