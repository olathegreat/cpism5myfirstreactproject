import React from "react";
import "./NavComponent.css";
import { Link, useNavigate } from "react-router-dom";


function NavComponent(props) { 
    const backgroundToDisplay = props.backgroundColor || "lightblue";
    const navigate = useNavigate();


    const signUpButtonFunction = () => {
        alert("Sign up clicked!");
    }

    return (
        <nav style={{background: backgroundToDisplay}}>
            <h1 onClick={()=>navigate("/")}>{props.username}</h1>

            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/contact-us">Contact</Link></li>
                
            </ul>


            <div className="nav-buttons">
                <button className="button-no-bg" onClick={()=> alert("clicked!")}>Login</button>
                <button onClick={signUpButtonFunction}>Sign up</button>
                <div>{props.loginChecker }</div>
            </div>
        </nav>
            
        )
};


export default NavComponent;