import React from "react";
import "./CardComponent.css";
const CardComponent = (props) => {
  return (
    <div className="class-component-body">
      <img
        src={props.img}
        alt="user headshot"
      />
      <div className="card-content">
              <h3>{props.name}</h3>
              <p>{ props.description}</p>
        <button onClick={()=>alert(`you have clicked ${props.name} card`)}>Visit my profile</button>
      </div>
    </div>
  );
};

export default CardComponent;
