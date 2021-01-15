import React, { Component } from 'react';
import emblem1 from '../../images/emblem1.png'

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
      <div className="container first-info">
        <div className="title row">
          <span><div className="red mr-2"></div></span>
          <div className="">
            <img className="pb-4" src={emblem1} alt="" srcset=""/>
          </div>
          <div className="col-md-5 col-sm-8 col-9 ">
            <h2 className="title-text">{this.props.name} </h2>
          </div>
        </div>
    <div className="minister"> 
      <strong>Minister: </strong> 
      {this.props.minister} 
    </div>
    <div className="mos"> <strong>Minister of state: </strong> {this.props.minister_state} </div>
    {/* <button type="button" class="btn text-primary ">  More Info <i class="fas fa-caret-down ml-1"></i> </button> */}
    
        
      </div>
    )
  }
}

export default FirstPartInfo
