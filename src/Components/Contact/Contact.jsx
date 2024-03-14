import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return <>
    <div className="homeStyle contactBg ">

    <div className="title text-center greyy mt-3">
      <h1 className='fw-bold ' >CONATCT SECTION</h1>
      <div className='my-3 d-flex w-25 m-auto  text-center justify-content-center align-items-center '>
      <div className="firstLine1 "></div>
        <i className="fa-solid fa-star ms-3"></i>
        <div className="scndLine1"></div>
      </div>
    </div>

        <form className="w-50 m-auto mt-5"  >
          <input type="text"  className='form-control' placeholder="userName"/>
          <input type="text"  className='form-control my-5' placeholder="userAge"/>
          <input type="email" className='form-control my-5' placeholder="userEmail" />
          <input type="password" className='form-control my-5' placeholder="userPassword"/>
          <button type="button" className='btn '>Send Message </button>
         </form>
    </div>
   
    </>
  }
}
