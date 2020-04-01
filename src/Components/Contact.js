import React, { Component } from 'react'
import "./Contact.css"

function Contact(props) {
  return (
    <div className="Contact">
      <div>
        <img className="avatar" src={props.avatar}/>
      </div>
      <div className="status"> 
  <h4 className="name">{props.name}</h4>
        <div className="status">
          <div className="status">
            <span className={props.status === "on" ? "status-online" : "status-offline"}></span>
            <p className="status-text">{props.status === "on" ? 'Online' : 'Offline'}</p>
          </div>
          </div>
        </div>
      </div>
    )
}

export default Contact;


