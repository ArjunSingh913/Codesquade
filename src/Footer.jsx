import React from 'react';
import fb from './Assets/Images/f1.png';
import inst from './Assets/Images/instag.png';
import ind from './Assets/Images/ind.png';
import "./Assets/Css/style.css";
import { NavLink } from 'react-router-dom';
export default function Footer() {
  return (
    <> 
    
    <div className='bottom-header'>
   
    <h3 className='txt3'>Our Student Says</h3>
   
<footer className="d-flex flex-wrap justify-content-between align-items-center py-2  border-top">
<div className="col-md-4 d-flex align-items-center"style={{backgroundColor:"rgb(5, 5, 88)"}} >
<NavLink to="/" className="mb-3 me-2 mb-md-0  text-decoration-none lh-1">
</NavLink>
<span className="mb-3 mb-md-0 " style={{color:"white",marginLeft:"60px"}} >{new Date().getFullYear()}
{'.'} Company, Inc</span>
</div>

<ul className="nav col-md-4 justify-content-end list-unstyled d-flex  "style={{marginRight:"100px"}} >
<li>   <img className="navbar-brand" style={{width:"2.3rem",marginTop:"1rem"}} src={fb} alt="logo"/> </li>
<li className="ms-3"> <img className="navbar-brand"  style={{width:"2.3rem",marginTop:"1rem"}} src={inst} alt="logo"/></li>
<li className="ms-3"> <img className="navbar-brand" style={{width:"2.6rem",marginTop:".9rem"}} src={ind} alt="logo"/></li>
</ul>
</footer>
</div>
   
   
    </>
  )
}
