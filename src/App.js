import React, { Component } from 'react';
import logo from './assets/SurreyCodeCampLogoNew.svg';
import './App.css';
import Image from './components/Image.js';
import Button from './components/Button.js';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      requestSite: false
    };
    this.toggleRequestAProject = this.toggleRequestAProject.bind(this);

  }
  toggleRequestAProject(){
    this.setState(prevState => ({requestSite: !prevState.requestSite}));
  }
  render() {
    return (
      <div className="App">
        <header>
          <Image
            id="logo" imageSource={logo}
            alt="SurreyCodes"
            />
          <Button
            id="headerBtn"
            onClick={this.toggleRequestAProject}
            value={!this.state.requestSite ? "Request a Project" : "Learn to Code"}
            />
        </header>
      </div>
    );
  }
}

export default App;
