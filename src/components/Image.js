import React, { Component } from 'react';

class Image extends Component {
  render(){
    return(
      <img id={this.props.id} src={this.props.imageSource} alt={this.props.alt}></img>
    );
  }
}

export default Image;
