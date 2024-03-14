import React, { Component } from 'react'
import styles from "./Footer.module.css"
export default class Footer extends Component {
  render() {
    return <>
 <div className={styles.footer}>
 <div className="container">
      <div className="row">
      
        <div className="col-md-4 ">
          <div className="location">
            <p className={styles.loc}>LOCATION</p>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
        </div>
        <div className="col-md-4  ">
          <div className="aroundWeb ">
            <p className={styles.loc}>AROUND THE WEB</p>
            <ul className='d-flex gap-2   '>
              <li className={styles.social} >
              <i className="fa-brands fa-facebook "></i>
              </li>
              <li className={styles.social}>
              <i className="fa-brands fa-twitter"></i>
              </li>
              <li className={styles.social}>
              <i className="fa-brands fa-linkedin"></i>
              </li>
              <li className={styles.social}>
              <i className="fa-solid fa-globe"></i>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-4 ">
          <div className="freelancer">
          <p className={styles.loc}>ABOUT FREELANCER</p>
          <p >Freelance is a free to use, licensed Bootstrap theme created by Route </p>
          </div>
        </div>
 

      


      </div>
    </div>
    <div className={styles.copyRight}>
    <p >Copyright © Your Website 2021</p>
   </div>
 </div>
  
    </>
  }
}
