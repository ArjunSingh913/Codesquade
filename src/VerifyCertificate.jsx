import * as React from 'react';

import certificate from './Assets/Images/certi.webp'
import NavBar from './NavBar';
import Footer from './Footor1';


export default function VerifyCertificate() {
  return (
  <>
  <div className='bgcolor'>
  <NavBar/>
<div className="card download_certificate" style={{width:"30rem",height:"30rem" ,borderWidth:"4px"}}>
<div className="list-group"  >
  <button type="button"  className="list-group-item list-group-item-action active disabled " aria-current="true" style={{backgroundColor:"rgb(5, 5, 88)",borderRadius:"1px 1px 1px 1px"}}>
  Verify Certificate
  </button>
  </div>
  <img style={{width:"10rem",marginLeft:"10rem",marginTop:"2rem"}} src={certificate} className="card-img-top" alt="..."/>
  <div className="card-body" >
  <div className="list-group"  >
  <button type="button" className="list-group-item list-group-item-action active disabled " aria-current="true" style={{backgroundColor:"rgb(5, 5, 88)"}}>
 Verify Now
  </button>
  
  <div  >
  <input style={{marginTop:"1.5rem",borderRadius:"1px 1px 1px 1px" }} type="text" className="form-control"   placeholder="Enter Certificate Number To Verify Certificate"/>
  </div>
  <button type="button" style={{marginTop:"1rem",backgroundColor:"rgb(5, 5, 88)"}} className="list-group-item list-group-item-action active " aria-current="true">
  Submit
  </button>
  </div>
  </div>
</div>         
<Footer/>
              </div>       

  </>
  )
}
