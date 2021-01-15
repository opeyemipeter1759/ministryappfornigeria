import React, { Component } from 'react'
// import emblem1 from '../../images/emblem1.png'
import ShowMoreText from 'react-show-more-text';



class SecondPartInfo extends Component {
  render() {
    return (
        <ShowMoreText
        line={1}
        more = {<><span>Show More </span> <i class="fas fa-caret-down ml-1"></i> </>}
        less = {<><span>Show More </span> <i class="fas fa-caret-up ml-1"></i> </>}
        className="content-css more-info"
        anchorClass =" my-anchor-css-class"
        onClick={this.executeClick}
        expand={false}
        width={20}
        >
             <div className="container second-info">
            {/* <div className="title row">
                <span><div className="red mr-2"></div></span>
                <div className="">
                  <img className="pb-4" src={emblem1} alt="" srcset=""/>
                </div>
                <div className="col-md-5 col-sm-8 col-9 ">
                  <h2 className="title-text">{this.props.name} </h2>
                </div>
                </div> */}
                <div className="minister"> 
                  <strong>Minister: </strong>
                  {this.props.minister}
                </div>
           
    <p className="address"> Address: </p>
      <div className="address">
       {this.props.address}
      </div>
    <p className="address "> Web: <a href={this.props.web}> {this.props.web} </a> </p>

    {/* <button type="button" class="btn text-primary">  More Info <i class="fas fa-caret-up ml-1"></i> </button> */}
    
    
      </div>
      
          
        </ShowMoreText>





     
    )
  }
}

export default SecondPartInfo
