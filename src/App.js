 import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'

class App extends Component {

  render (){
  return (
    <div className="App">
      <Greet name= "Bruce"  heroName="Batman">
        <p> This is children props</p></Greet>
      <Greet name="clark" heroName="superman">
      <button>action</button>
      </Greet>
      
      <Welcome name= "Bruce" heroName="Batman"/>
      <Welcome name= "Clark" heroName="Superman"/>
     
       
      {/* <Greet />
      <Welcome /> */}
      <Hello />
    </div>
  
  );
}
}

export default App;
