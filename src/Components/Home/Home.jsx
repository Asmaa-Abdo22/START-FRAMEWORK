import React, { Component } from 'react'
import image from "../../assets/assi 1 react assets/asset 0.svg"
export default class Home extends Component {
  render() {
    return <>
    <div className="homeStyle  d-flex justify-content-center align-items-center text-light text-center">
      <div>
      <img src={image} alt="person smile " className='w-75'/>
      <h2 className='fw-bold my-3'>START FRAMEWORK</h2>

      <div className="d-flex justify-content-center align-items-center  my-3">
        <div className="firstLine"></div>
        <i className="fa-solid fa-star "></i>
        <div className="scndLine"></div>
      </div>
     
      
      <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
      
    </div>
    </>
  }
}
