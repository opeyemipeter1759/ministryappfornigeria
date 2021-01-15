import React, { Component } from 'react'
import emblem from '../../images/emblem.png'

class SecondPartInfo extends Component {
  render() {
    return (
      <div className="container">
        <div className="first-info">
        <div className="title">
          <img src={emblem} alt="" srcset=""/>
    <h2>{this.props.name} </h2>
    <p> <strong>Minister: </strong> {this.props.minister} </p>
    <p> Address: <br/> {this.props.address} </p>
    <p> Web: {this.props.web} </p>

    <button type="button" class="btn text-primary">  More Info <i class="fas fa-caret-up ml-1"></i> </button>
    
    {/* {this.state.isUp = false ?
    <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" onClick={() => {
      this.state.isUp = !this.state.isUp
      console.log(this.state.isUp)
      }}>
    Dropdown
      {this.state.up}
    </button>
    : <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" onClick={() => {
      this.state.isUp = !this.state.isUp
      console.log(this.state.isUp)
      }}>Dropdown
      {this.state.down}
      </button>} */}
        </div>
      </div>
      </div>
    )
  }
}

export default SecondPartInfo
