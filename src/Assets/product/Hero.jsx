import React from 'react'
import img7 from '../Images/img7.webp'
export default function Hero() {
  return (
    <>
    <div class="container postion-relative bg1 my-5 rounded-5">
    
    <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-5 border shadow">
      <div class="col-lg-6 p-3 p-lg-5 pt-lg-3">
        <h1  class="display-4 fw-bold lh-1">Best Java Training IT Company in India</h1>
        <p class="lead"><strong>Mr. Manish Bhatia (JAVA Consultant)</strong>  has more than 20+ years of experience in teaching JAVA. He has the required expertise and knows how to shape the future of any aspirant.</p>
        
        <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
          <button type="button" class="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Primary</button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
        </div>
        
      </div>
      
      <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden ">
          <img class="rounded-lg-1" src={img7} alt="" style={{marginBottom:"120px"}} width="450"/>
      </div>
      
    </div>
  </div>
  
    </>
  )
}
