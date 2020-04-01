import React, { Component } from 'react'
import "./Contact.css"

const user = {
 avatar : 'https://randomuser.me/api/portraits/men/0.jpg',
 name : 'Joshua Daniels',
 status : true
}
const status = user.status ? 'online' : 'offline';

const Contact = () => {
  return (
    <div className="Contact">
      <div>
        <img className="avatar" src={user.avatar}/>
      </div>
      <div className="status"> 
          <h4 className="name" src={user.name}>{user.name}</h4>
        <div className="status">
          <div className="status" src={status}>
            {user.status ? <span className="status-online"></span> : <span className="status-offline"></span>} {user.status ? 'Online' : 'Offline'}</div>
          </div>
      </div>
    </div>
  )
}

export default Contact;