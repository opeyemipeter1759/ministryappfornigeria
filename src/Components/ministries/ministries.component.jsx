import React from 'react';
import MainInfo from '../maininfo/maininfo.component'
import axios from 'axios'

 class Ministries extends React.Component{

  constructor(props) {
    super(props)
  
    this.state = {
       data: []
    }
  }
  
  componentDidMount(){
axios.get('https://ministries.herokuapp.com/ministries/?format=json').then(result =>{
  this.setState({
    data: result.data
  })

})


  }


  render() {
    const { data } = this.state
    return (
      <div>
      
       {
         data.map(item => (
          <MainInfo
              key={item.id}
              item={item}
             
          />
         ))
       }
      </div>
    )
  }
}
export default Ministries
