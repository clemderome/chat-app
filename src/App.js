import React, {Component} from 'react';
import ContactList from './Components/ContactList'
import './App.css';



class App extends Component {
  render() {
  return (
    <div className="App">
      <header>
      </header>
      <div>
        <ContactList />
      </div> 
    </div>
      )
  }
}

export default App;
