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
      <img className="avatar" src={user.avatar}/>
      <div className="status"> 
        <h4 className="name" src={user.name}>{user.name}</h4>
        <p className="status-online" src={status}> {user.status ? ' ' : ' '}</p>
        <p className="status, status-text" src={status}> {user.status ? 'Online' : 'Offline'}</p>
      </div>
    </div>
  )
}

export default Contact;