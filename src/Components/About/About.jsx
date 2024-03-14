import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return <>
    <div className='homeStyle d-flex justify-content-center flex-column align-items-center text-light'>
      <h2 className='fw-bold h1 '>ABOUT COMPONENT</h2>
      <div className='my-3 d-flex w-25 m-auto  text-center justify-content-center align-items-center '>
      <div className="firstLine"></div>
        <i className="fa-solid fa-star "></i>
        <div className="scndLine"></div>
      </div>
     <div >
      <div className="d-flex text-light w-75 m-auto gap-3" >
      <p>
      Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
      </p>
      <p>
      Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
      </p>
      </div>
     
     </div>
    </div>
    </>
  }
}
