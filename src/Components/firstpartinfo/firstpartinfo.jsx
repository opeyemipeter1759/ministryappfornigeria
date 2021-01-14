import React, { Component } from 'react';
import emblem from '../../images/emblem.png'

class FirstPartInfo extends Component {
  render() {
    return (
      <div className="first-info">
        <div className="title">
          <img src={emblem} alt="" srcset=""/>
        </div>
      </div>
    )
  }
}

export default FirstPartInfo
