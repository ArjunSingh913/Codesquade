import React from 'react'
import { Link } from 'react-router-dom'
import "./Assets/Css/style.css";
export default function Nav() {
  return (
   <>
   
    <ul className="nav justify-content-end background1 fixed-top ">
    <Link className="navbar-brand" to="#"><img  style={{width:"13rem",marginTop:"1.5rem",marginRight:"40.2rem"}} src="https://www.codesquadz.com/web_assets/img/aelogowhitenew.png" alt="logo"/></Link>
    <li className="nav-item" >
     <Link to={'/Home'} ><button type="button" className="btn btn-outline-light" style={{marginTop:"2rem",border:"0"}}>Home</button></Link>
    </li>
    <div className="dropdown-center">
    <button className="btn btn-outline-light dropdown-toggle" style={{marginTop:"2rem",border:"0"}} type="button" data-bs-toggle="dropdown" aria-expanded="false">
       Course
      </button>
      <ul className="dropdown-menu">
        <li><Link className="dropdown-item" to={'/Java'}>Java</Link></li>
        <li><Link className="dropdown-item" to={'/Python'}>Python</Link></li>
        <li><Link className="dropdown-item" to={'/Android'}>Android</Link></li>
      </ul>
    </div>
    <li className="nav-item">
    <Link to={'/Certificate'}><button type="button" className="btn btn-outline-light"  style={{marginTop:"2rem",border:"0"}}>Certificate</button></Link>
    </li>
    
    <li className="nav-item">
    <Link to={'/About'}> <button type="button" className="btn btn-outline-light"  style={{marginTop:"2rem",border:"0"}}>About Us</button></Link>
    </li>
    <li className="nav-item">
    <Link to={''}> <button type="button" className="btn btn-outline-light"  style={{marginTop:"2rem",border:"0",marginRight:"5.9rem"}}>Contact Us</button></Link>
    </li>
    </ul>
   </>
  )
}
