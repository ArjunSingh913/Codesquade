import React from 'react'
import { Link } from 'react-router-dom'

export default function Customor(props) {
  return (
    <>
    
<section class="py-6  " style={{marginTop:"2rem" ,marginBottom:"2rem"}}>
  <div class="container">
  <div className='m-head__8' style={{marginBottom:"2rem"}} >
   <span className='title1'>{props.head}</span>
   <span style={{marginLeft:"15px"}}>{props.head1}</span>
  
    
   </div>
   
    <div class="row">
      <div class="col-lg-4 mb-lg-0  mb-4">
        <div class="card ">
          <div class="card-header rounded-4 p-0 mx-3 mt-3 position-relative z-index-1">
            <Link to={props.link} class="d-block">
              <img src={props.img} alt='java' class="img-fluid rounded-4"/>
            </Link>
          </div>
          <div class="card-body pt-3">
            <span class="text-gradient text-warning text-uppercase text-xs font-weight-bold my-2">{props.title}</span>
            <Link to={props.link} class="card-title h5 d-block text-darker">
             {props.corse1}
            </Link>
            <p class="card-description mb-4">
         {props.about1}
            </p>
            <div class="author align-items-center">
              <img src={props.img1} alt="img7" class="avatar rounded-circle shadow"/>
              <div class="name ps-3">
                <span>{props.mentor}</span>
                <div class="stats">
                  <small>{props.work}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 mb-lg-0 mb-4">
        <div class="card">
          <div class="card-header p-0 mx-3 mt-3 rounded-4 position-relative z-index-1">
            <Link to={props.link} class="d-block">
              <img src={props.img2} alt='java' class="img-fluid rounded-4"/>
            </Link>
          </div>

          <div class="card-body pt-3">
            <span class="text-gradient text-info text-uppercase text-xs font-weight-bold my-2">{props.title}</span>
            <Link to={props.link} class="text-darker card-title h5 d-block">
            {props.corse2}
            </Link>
            <p class="card-description mb-4">
            {props.about2}
            </p>
            <div class="author align-items-center">
              <img src={props.img1} alt="img7" class="avatar rounded-circle shadow"/>
              <div class="name ps-3">
                <span>{props.mentor}</span>
                <div class="stats">
                  <small>{props.work}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 mb-lg-0 mb-4">
        <div class="card">
          <div class="card-header p-0 mx-3 mt-3 rounded-4 position-relative z-index-1">
            <Link to={props.link} class="d-block">
              <img src={props.img3} alt='java' class="img-fluid rounded-4"/>
            </Link>
          </div>

          <div class="card-body pt-3">
            <span class="text-gradient text-warning text-uppercase text-xs font-weight-bold my-2">{props.title}</span>
            <Link to={props.link} class="text-darker card-title h5 d-block">
            {props.corse3}
            </Link>
            <p class="card-description mb-4">
            {props.about3}
            </p>
            <div class="author align-items-center">
              <img src={props.img1} alt="img7" class="avatar rounded-circle  shadow"/>
              <div class="name ps-3">
                <span>{props.mentor}</span>
                <div class="stats">
                  <small>{props.work}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-4 mb-lg-0 mt-4 mb-4">
        <div class="card">
          <div class="card-header p-0 mx-3 mt-3 rounded-4 position-relative z-index-1">
            <Link href="javascript" class="d-block">
              <img src={props.img4} alt='java' class="img-fluid rounded-4"/>
            </Link>
          </div>
          <div class="card-body pt-3">
            <span class="text-gradient text-warning text-uppercase text-xs font-weight-bold my-2">{props.title}</span>
            <Link to={props.link} class="card-title h5 d-block text-darker">
            {props.corse4}
            </Link>
            <p class="card-description mb-4">
            {props.about4}
            </p>
            <div class="author align-items-center">
              <img src={props.img1} alt="img7" class="avatar rounded-circle shadow"/>
              <div class="name ps-3">
                <span>{props.mentor}</span>
                <div class="stats">
                  <small>{props.work}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-4 mb-lg-0 mt-4 mb-4">
        <div class="card">
          <div class="card-header p-0 mx-3 mt-3 rounded-4 position-relative z-index-1">
            <Link href="javascript" class="d-block">
              <img src={props.img5} alt='java' class="img-fluid rounded-4"/>
            </Link>
          </div>
          <div class="card-body pt-3">
            <span class="text-gradient text-warning text-uppercase text-xs font-weight-bold my-2">{props.title}</span>
            <Link to={props.link}  class="card-title h5 d-block text-darker">
            {props.corse5}
            </Link>
            <p class="card-description mb-4">
            {props.about5}
            </p>
            <div class="author align-items-center">
              <img src={props.img1} alt="img7" class="avatar rounded-circle shadow"/>
              <div class="name ps-3">
                <span>{props.mentor}</span>
                <div class="stats">
                  <small>{props.work}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    </>
  )
}
