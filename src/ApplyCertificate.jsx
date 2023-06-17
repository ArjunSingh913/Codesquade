import * as React from 'react';
import NavBar from './NavBar';
import Footer from './Footor1';

export default function ApplyCertificate() {
  return (
  <>
  <div className='bgcolor'>
  <NavBar/>

  <div class="list-group certificate"  >
<button type="button" class="list-group-item list-group-item-action active disabled" aria-current="true" style={{backgroundColor:"rgb(5, 5, 88)"}}>
Apply For Certificate
</button>
<input style={{marginTop:"1.5rem",borderRadius:"1px 1px 1px 1px" }} type="text" class="form-control"   placeholder="Enter Name"/>
<div className='java'>
<input style={{marginTop:"1rem",borderRadius:"1px 1px 1px 1px" }} type="email" class="form-control" id="exampleInputEmail1"  placeholder="Enter Email"/>
<input style={{marginTop:"1rem",marginLeft:"1rem",borderRadius:"1px 1px 1px 1px" }} type="text" class="form-control"   placeholder="Enter Contact Number"/>
</div>

<div className='java'>
<select style={{marginTop:"1rem",borderRadius:"1px 1px 1px 1px",color:" #605e7e" }}  class="form-control "   >
  <option selected>Select Link Course</option>
  <option value="1">Java</option>
  <option value="2">Python</option>
  <option value="3">Android</option>
</select>
<select style={{marginTop:"1rem",marginLeft:"1rem",borderRadius:"1px 1px 1px 1px",color:" #605e7e" }} class="form-control "   >
  <option selected>Select Branch</option>
  <option value="1">Sector 63, Noida</option>
</select>
</div>

<div className='java'>
<input style={{marginTop:"1rem",borderRadius:"1px 1px 1px 1px" }} type="text" class="form-control"   placeholder="Enter Faculty Name"/>
<input style={{marginTop:"1rem",marginLeft:"1rem",borderRadius:"1px 1px 1px 1px" }} type="text" class="form-control"   placeholder="Enter Codesquadz Student Id"/>
</div>
 
<div  style={{marginTop:"1rem",justifyContent:"space-between",display:"flex"}}>
<label>Start Date</label>
<label style={{marginRight:"20.5rem"}}>End Date</label>
</div>
<div className='java'>
<input style={{marginTop:".3rem",borderRadius:"1px 1px 1px 1px" }}  class="form-control" type="Date"  />
<input style={{marginTop:".3rem",marginLeft:"1rem",borderRadius:"1px 1px 1px 1px" }} type="Date" class="form-control"  />
</div>

<button type="button" style={{marginTop:".5rem",backgroundColor:"rgb(5, 5, 88)"}} class="list-group-item list-group-item-action active " aria-current="true">
Submit
</button>
</div>

<Footer/>

              </div>       

  </>
  )
}
