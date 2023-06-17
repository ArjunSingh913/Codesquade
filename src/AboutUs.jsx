import React from 'react'
import "./Assets/Css/style.css";
import Footer from './Footor1';
import Nav from './NavBar';
import get from './Assets/Images/get.png';

import Input from '@mui/material/Input';
const ariaLabel = { 'aria-label': 'description' };
export default function AboutUs() {
  return (
   <>
   <div className='Democlass'>
<Nav/>
<div className='java container  bgcolor' style={{marginLeft:"80px",position:"relative",borderRadius:"20px 20px 1px 1px"}}>
<img className='get' src={get} alt="get" />
   <div className="list-group AboutUs" style={{marginLeft:"100px",margin:"59.5px",marginBottom:"100px"}} >
   <button type="button" className="list-group-item list-group-item-action active disabled" aria-current="true" style={{backgroundColor:"rgb(5, 5, 88)",width:"32rem",marginLeft:"9rem"}}>
   Enquiry Now
   </button>
   <div style={{display:"flex",justifyContent:"space-between",marginTop:"40px"}}>
   <Input style={{marginLeft:"10rem"}} placeholder="First Name" inputProps={ariaLabel} />
   <Input placeholder="Last Name" inputProps={ariaLabel} />
   </div>
   <div style={{display:"flex",justifyContent:"space-between",marginTop:"40px"}}>
   <Input style={{marginLeft:"10rem"}} placeholder="Email" inputProps={ariaLabel} />
   <Input placeholder="Phone Number" inputProps={ariaLabel} />
   </div>
   <select  style={{marginTop:"2rem",marginLeft:"10rem",color:" #605e7e",width:"12.3rem" }}  className="form-control1 "   >
     <option selected>Select Course</option>
     <option value="1">Java</option>
     <option value="2">Python</option>
     <option value="3">FullStack</option>
   </select>
<div style={{marginLeft:"10rem",}}>
<label class="form-label form-text labeltxt" style={{marginTop:"2rem"}}>Tell Us. We Are Listening</label>
<textarea  className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
   
   <button type="button" style={{marginTop:"2rem",backgroundColor:"rgb(5, 5, 88)",width:"31.5rem",marginLeft:"9.5rem"}} className="list-group-item list-group-item-action active " aria-current="true">
   Submit
   </button>
   </div>
   </div>
<Footer/>
</div>
   </>
  )
}
