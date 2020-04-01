import React, {Component} from 'react';
import Contact from './Components/Contact'
import './App.css';



class App extends Component {
  render() {
  return (
    <div className="App">
      <header>
      </header>
      <Contact name ="Joshua Daniels" avatar="https://randomuser.me/api/portraits/men/0.jpg" status="on" />
      <Contact name="Gertrude Ross" avatar="https://randomuser.me/api/portraits/women/62.jpg" status="off"/>
      <Contact name="Jose Gray" avatar="https://randomuser.me/api/portraits/men/28.jpg" status="on" />
    </div>
  );
  }
}

export default App;
