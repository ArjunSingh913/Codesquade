import * as React from 'react';

import certificate from './Assets/Images/certi.webp'
import Nav from './NavBar';
import Footer from './Footor1';
import { Link } from 'react-router-dom';

export default function Certificate() {
  return (
  <>
  <div className='bgcolor'>
  <Nav/>

  <div style={{maxWidth: "650px",marginTop:"5rem"}}> 
  <div className="card mb-3 bg" style={{maxWidth: "650px",marginTop:"5rem"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={certificate}  style={{maxWidth: "650px",marginTop:"5rem"}} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h3 style={{maxWidth: "650px",marginTop:"5rem"}} className="card-title">Certificate</h3>
      </div>
    </div>
  </div>
</div>
   
<div className='java '>
<div className="card text-center " style={{maxWidth: "650px",marginBottom:"5rem"}}>
  <div className="card-header" style={{backgroundColor:"rgb(5, 5, 88)",color:"white", borderRadius:"1px 1px 30px 30px"}}>
  Apply Now
  </div>
  <div className="card-body " >
    <Link to={'/ApplyCertificate'}  className="btn btn-primary certificate_content">Apply For Certificate</Link>
    <Link to={'/DownloadCertificate'} className="btn btn-primary certificate_content">Download Certificate</Link>
    <Link to={'/VerifyCertificate'} className="btn btn-primary certificate_content">Verify Certificate</Link>
  </div>
  
  <div className="card-footer  text" style={{backgroundColor:"rgb(5, 5, 88)",height:"2.5rem"}}>
   
  </div>
</div>


</div>
</div>

<Footer/>

              </div>       

  </>
  )
}
