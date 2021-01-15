import React, { Component } from 'react';
import emblem from '../../images/emblem.png'

class FirstPartInfo extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isUp: true,
       up: 'UP',
       down: 'DOWN'
    }
  }
  
  render() {
    return (
      <div className="container">
        <div className="title row">
          <div className="">
            <img className="pb-4" src={emblem} alt="" srcset=""/>
          </div>
          <div className="col-md-4 col-sm-4 col-4 ">
            <h2 className="title-text">{this.props.name} </h2>
          </div>
        </div>
    <p> <strong>Minister: </strong> {this.props.minister} </p>
    <p> <strong>Minister of state: </strong> {this.props.minister_state} </p>
    <button type="button" class="btn text-primary">  More Info <i class="fas fa-caret-down ml-1"></i> </button>
    
        
      </div>
    )
  }
}

export default FirstPartInfo
