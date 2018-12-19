import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';

const Particlesconc ={
  particles: {
    line_linked: {
      shadow: {
        enable: true,
        color: "#3CA9D1",
        blur: 5,
      },
      number:{
        value:100,
        density:{
          enable:true,
          value_area:800
        }
      }
    }
  }
}
class App extends Component {
  
  render() {
    return (
      
      <div className="App">
      <Particles className="particles"
              params={Particlesconc}
              
            />
      <Navigation />
      <h1 className="underline">Hello Brain Freeze Application</h1>
      {/* <Logo /> */}
      {/* <Rank />
      <InputForm />
      <ImageView />      */}

      </div>
    );
  }
}

export default App;
