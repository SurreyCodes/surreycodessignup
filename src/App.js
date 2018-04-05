import React, { Component } from 'react';
import logo from './assets/SurreyCodeCampLogoNew.svg';
import './App.css';
import Image from './components/Image';
import Button from './components/Button';
import Header from './components/Header';
import Learn from './components/Learn';




class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      requestSite: false
    };
    this.toggleRequestAProject = this.toggleRequestAProject.bind(this);

  }
  toggleRequestAProject(){
    let btn = document.getElementById('headerBtn');
    if(this.state.requestSite){
      btn.style.backgroundColor = "white";
      btn.style.color = "green";
    } else{
      btn.style.backgroundColor = "blue";
      btn.style.color = "white";
    }
    this.setState(prevState => ({requestSite: !prevState.requestSite}));

  }
  render() {
    let style = {
      height: window.innerHeight,
      width: window.innerWidth,
      display: 'grid',
      gridTemplateRows: '1fr 5fr 1fr'
    }
    return (
      <div className="App">
        <Header
          onClick={this.toggleRequestAProject}
          requestSite={this.state.requestSite}
        />
      <Learn />
      <footer>
        <ul id="footerMap">
          <li>Application Process</li>
          <li>Volunteer With Us</li>
          <li>Code Of Conduct</li>
          <li>Sponsor Us</li>
        </ul>
      </footer>
      </div>
    );
  }
}

export default App;
