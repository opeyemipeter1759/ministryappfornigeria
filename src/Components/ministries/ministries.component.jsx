import React from 'react';
import MainInfo from '../maininfo/maininfo.component'
import axios from 'axios'

 class Ministries extends React.Component{

  constructor(props) {
    super(props)
  
    this.state = {
       data: [],
       isLoading: false,
    }
  }
  
  componentDidMount(){
    this.setState({isLoading: true})
axios.get('https://ministries.herokuapp.com/ministries/?format=json').then(result =>{
  this.setState({
    data: result.data,
    isLoading: false
  })

})


  }


  render() {
    const { data, isLoading } = this.state
    return (
      <div>
        {
          isLoading === true ? <em className=" container display-4">Loading...</em>
        
      :
      <p>
       {
         data.map(item => (
          <MainInfo
              key={item.id}
              item={item}
             
          />
         ))
       }
       </p>
      }
      </div>
    )
  }
}
export default Ministries
