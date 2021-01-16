import React, { Component } from 'react';
import emblem from '../../images/emblem.png'

class FirstPartInfo extends Component {
  
  
  render() {
    return (
      < div className="container first-info">
        <div className="title row">
          <div className="col-md-1 col-sm-3 col-3">
                <img className="mr-2" src={emblem} alt="" />
          </div>
          <div className="col-md-5 col-sm-9 col-6">
            <h2 className="title-text ml-2">{this.props.name} </h2>
          </div>
        </div>
        {/* <div className="row">
        <div>

        </div>
        </div> */}
    <div className="minister"> 
      <strong>Minister: </strong> 
      {this.props.minister} 
    </div>
    <div className="mos"> <strong>Minister of state: </strong> {this.props.minister_state} </div>
    
        
      </div>
    )
  }
}

export default FirstPartInfo
