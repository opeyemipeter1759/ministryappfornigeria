import React from 'react';
import FirstPartInfo from '../firstpartinfo/firstpartinfo';
import SecondPartInfo from '../secondpartinfo/secondpartinfo';
class MainInfo extends React.Component {

  render() {
    return (
      <div>
      <FirstPartInfo
        name= {this.props.item.name}
        minister ={this.props.item.minister}
        minister_state = {this.props.item.minister_state}
        />
      <SecondPartInfo
        name= {this.props.item.name}
        minister ={this.props.item.minister}
        address = {this.props.item.address}
        web = {this.props.item.website}
        />
        <hr/>
      </div>
    )
  }
}

export default MainInfo