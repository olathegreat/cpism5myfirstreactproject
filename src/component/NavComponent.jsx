import React from "react";
import "./NavComponent.css";


function  NavComponent() { 

    return (
        <nav>
            <h1>New react project</h1>

            <ul>
                <li><a href="*">Home</a></li>
                <li><a href="*">About</a></li>
                <li><a href="*">Shop</a></li>
                <li><a href="*">Blog</a></li>
                <li><a href="*">Contact</a></li>
                
            </ul>


            <div className="nav-buttons">
                <button className="button-no-bg">Login</button>
                <button>Sign up</button>
            </div>
        </nav>
            
        )
};


export default NavComponent;