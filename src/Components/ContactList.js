import React, {Component} from 'react'
import Contact from './Contact'
import './Contact.css'

const users = [
    {
      name: 'Robert Reyes',
      avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
      status: 'off'
    },
    {
      name: 'Nellie Caldwell',
      avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
      status: 'on'
    },
    {
      name: 'Vernon Mason',
      avatar: 'https://randomuser.me/api/portraits/men/84.jpg',
      status: 'on'
    },
    {
      name: 'Erica Hunt',
      avatar: 'https://randomuser.me/api/portraits/women/87.jpg',
      status: 'off'
    },
    {
      name: 'Juanita Phillips',
      avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
      status: 'on'
    }
  ];

  
  function ContactList() {
      return (
        <ul>
            {users.map( members => ( <Contact name={members.name} avatar={members.avatar} status={members.status} />)
            
            )}
        </ul>
      )
  }


  export default ContactList