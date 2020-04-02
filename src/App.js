import React, {Component} from 'react';
import ContactList from './Components/ContactList'
import Contact from './Components/Contact'
import './App.css';



class App extends Component {
  render() {
  return (
    <div>
      <header>
      </header>
      <div>
      <Contact name ="Joshua Daniels" avatar="https://randomuser.me/api/portraits/men/0.jpg" status={true} />
      <Contact name="Gertrude Ross" avatar="https://randomuser.me/api/portraits/women/62.jpg" status={false}/>
      <Contact name="Jose Gray" avatar="https://randomuser.me/api/portraits/men/28.jpg" status={true} />
    
      <ContactList />
      </div> 
    </div>
      )
  }
}

export default App;
