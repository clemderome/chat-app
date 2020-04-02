import React, { Component } from 'react'
import "./Contact.css"

class Contact extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        online: props.status
      }
    }  
  
  render() {
  return (
    <div className="Contact">
      <div>
        <img className="avatar" src={this.props.avatar} alt={this.props.name}/>
      </div>
      <div className="status"> 
  <h4 className="name">{this.props.name}</h4>
        <div className="status">
          <div className="status"
          onClick={event => {const newClick = !this.state.online;
          this.setState({online : newClick})} }>
            <span className={this.state.online ? "status-online" : "status-offline"}></span>
            <p className="status-text">{this.state.online ? 'Online' : 'Offline'}</p>
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;


