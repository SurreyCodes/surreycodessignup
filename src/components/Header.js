import React, { Component } from 'react';
import Image from './Image.js';
import Button from './Button.js';
import logo from '../assets/SurreyCodeCampLogoNew.svg';

class Header extends Component {
  render(){
    return(
      <header>
        <div className="headerContainer">
          <Image
            id="logo" imageSource={logo}
            alt="SurreyCodes"
            />
          <Button
            id="headerBtn"
            onClick={this.props.onClick}
            value={!this.props.requestSite ? "Request a Project" : "Learn to Code"}
            />
        </div>
      </header>
    );
  }
}

export default Header;
