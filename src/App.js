import React, { Component } from 'react';
import './App.css';
//componenets
import CircleSelector from '../src/components/CircleSelector/CircleSelector';
import Circles from '../src/components/Circles/Circles';


class App extends Component {
  state={
    buttonOne: true,
    buttonTwo: false,
    buttonThree: false,
    buttonFour: false,
    selectedCircle: '',
  }

  handleButtonOne = () => {

    this.setState({
      buttonOne: true,
      buttonTwo: false,
      buttonThree: false,
      buttonFour: false,
    })
  }

  handleButtonTwo = () => {

    this.setState({
      buttonOne: false,
      buttonTwo: true,
      buttonThree: false,
      buttonFour: false,
    })
  }

  handleButtonThree = () => {

    this.setState({
      buttonOne: false,
      buttonTwo: false,
      buttonThree: true,
      buttonFour: false,
    })
  }

  handleButtonFour = () => {

    this.setState({
      buttonOne: false,
      buttonTwo: false,
      buttonThree: false,
      buttonFour: true,
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector 
            buttonOne={this.state.buttonOne} 
            buttonTwo={this.state.buttonTwo} 
            buttonThree={this.state.buttonThree} 
            buttonFour={this.state.buttonFour} 
            handleButtonOne={this.handleButtonOne}
            handleButtonTwo={this.handleButtonTwo}
            handleButtonThree={this.handleButtonThree}
            handleButtonFour={this.handleButtonFour}
          />
          <Circles
            buttonOne={this.state.buttonOne} 
            buttonTwo={this.state.buttonTwo} 
            buttonThree={this.state.buttonThree} 
            buttonFour={this.state.buttonFour} 
           />
        </main>
      </div>
    );
  }
}

export default App;
