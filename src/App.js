import * as React from 'react';
import "./Assets/Css/style.css"
import p1 from './Assets/Images/fb4.png'
import p2 from './Assets/Images/in6.webp'
import p4 from './Assets/Images/twit2.png'
import p5 from './Assets/Images/you.png'
import p6 from './Assets/Images/pin3.png'
import whatsapp from './Assets/Images/what.png'
import phone from './Assets/Images/phone-call.png'

import m6 from './Assets/Images/m1.png'
import t1 from './Assets/Images/m2.png'
import t2 from './Assets/Images/m3.png'
import t3 from './Assets/Images/m4.png'
import t4 from './Assets/Images/m5.png'
import t5 from './Assets/Images/m6.png'
import t6 from './Assets/Images/m7.png'
import t7 from './Assets/Images/m8.png'
import t8 from './Assets/Images/m9.png'
import t9 from './Assets/Images/py2.png'

import fb from './Assets/Images/f1.png'
import inst from './Assets/Images/instag.png'
import ind from './Assets/Images/ind.png'

import next from './Assets/Images/prv.png'
import pre from './Assets/Images/pre12.png'

export default function App() {
  return (
   <>
   <div className='bgcolor'>
<ul class="nav justify-content-end  ">
<li style={{marginRight:"38rem"}}>
<a className="navbar-brand" href="#"><img  style={{width:"2.5rem",marginTop:"2.4rem"}} src={p1} alt="logo"/></a>
  <a className="navbar-brand" href="#"><img  style={{width:"2.2rem",marginTop:"2.5rem",marginLeft:"4px"}} src={inst} alt="logo"/></a>
  <a className="navbar-brand" href="#"><img  style={{width:"2.6rem",marginTop:"2.5rem",marginLeft:"3px"}} src={p4} alt="logo"/></a>
  <a className="navbar-brand" href="#"><img  style={{width:"2.6rem",marginTop:"2.5rem",marginLeft:"2px"}} src={p5} alt="logo"/></a>
  <a className="navbar-brand" href="#"><img  style={{width:"2.7rem",marginTop:"2.5rem",marginLeft:"2px"}} src={p2} alt="logo"/></a>
  <a className="navbar-brand" href="#"><img  style={{width:"2.8rem",marginTop:"2.5rem",marginLeft:"2px"}} src={p6} alt="logo"/></a>
  </li>
  <li class="nav-item" style={{marginTop:"1.8rem"}}>
  <a class="nav-link" href="https://api.whatsapp.com/send/?phone=919289135096&amp;text=Hi%21&amp;type=phone_number&amp;app_absent=0"><img  style={{width:"3rem"}} src={whatsapp} alt="logo"/>+91- 9289135096</a>
  </li>
  
  <li class="nav-item" style={{marginTop:"2.3rem"}}>
  <a class="nav-link" href="tel:+917879332211"><img  style={{width:"1.7rem"}} src={phone} alt="logo"/>78-79-33-22-11</a>
  </li>

<li class="nav-item">
<button type="button"class="btn btn-outline-light"  style={{marginTop:"2rem",border:"0"}}></button>
</li>
<li class="nav-item">
<button type="button"class="btn btn-outline-light"  style={{marginTop:"2rem",border:"0",marginRight:"5rem"}}></button>
</li>

</ul>

<ul class="nav justify-content-end background ">
<a className="navbar-brand" href="#"><img  style={{width:"13rem",marginTop:"1.4rem",marginRight:"40rem"}} src="https://www.codesquadz.com/web_assets/img/aelogowhitenew.png" alt="logo"/></a>
<li class="nav-item" >
 <a href="App" ><button type="button" class="btn btn-outline-light"style={{marginTop:"2rem",border:"0"}}>Home</button></a>
</li>
<div class="dropdown-center">
<button class="btn btn-outline-light dropdown-toggle" style={{marginTop:"2rem",border:"0"}} type="button" data-bs-toggle="dropdown" aria-expanded="false">
   Course
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="Java">Java</a></li>
    <li><a class="dropdown-item" href="Python">Python</a></li>
    <li><a class="dropdown-item" href="Android">Android</a></li>
  </ul>
</div>
<li class="nav-item">
<a href='Certificate'><button type="button" class="btn btn-outline-light"  style={{marginTop:"2rem",border:"0"}}>Certificate</button></a>
</li>

<li class="nav-item">
<button type="button"class="btn btn-outline-light"  style={{marginTop:"2rem",border:"0"}}>About Us</button>
</li>
<li class="nav-item">
<button type="button"class="btn btn-outline-light"  style={{marginTop:"2rem",border:"0",marginRight:"5rem"}}>Contact Us</button>
</li>
</ul>

<div className='bottom-header'>
<h1 style={{padding:"60px"}}>Find The Best IT Course & Kick Start Your Career</h1>

<div style={{display:"flex",marginTop:"10px",justifyItems:"baseline",padding:"40px",width:"60rem",marginLeft:"16rem",paddingBottom:"100px"}} >
<select style={{color:" #605e7e",borderWidth:"13px",borderColor:"rgb(18, 114, 162)",borderRight:"4px",borderRadius:"5px 0px 0px 5px" }}  className="form-control "   >
  <option selected>Select a Course</option>
  <option value="1">Java</option>
  <option value="2">Python</option>
  <option value="3">Android</option>
</select>
<button type="button" style={{backgroundColor:"rgb(237, 86, 31)",width:"15rem",borderWidth:"13px",borderColor:"rgb(18, 114, 162)",borderLeft:"2px",borderRadius:"0px 5px 5px 0px",color:"white"}} className=" form-control  active " aria-current="true">
Search
</button>
</div>
</div>


<div  style={{marginTop:"20px"}} >
<h1 className='txt3' style={{textAlign:"center",color: "#605e7e"}}>Course Categories</h1>
</div>
<div  className="credentials_box " style={{display:"flex",marginTop:"50px" }} >                               
<div className="credentials_content bg1 " >
                      <img  src="https://www.codesquadz.com/website_assets/images/java-course.png" alt="Java"/>
                                    <h5 >Java</h5>
                                   </div> 
                             
                                   <div className="credentials_content bg1 " >
                                    <img src="https://www.codesquadz.com/website_assets/images/android-training.png" alt="Android"/>
                                    <h5 >Android</h5>
                                   </div>
                                    
                                   <div className="credentials_content bg1" >
                                     <img src="https://www.codesquadz.com/website_assets/images/aws-training.png" alt="AWS"/>
                                     <h5 >AWS</h5>
                                </div>

                                <div className="credentials_content bg1" >
                                    <img src="https://www.codesquadz.com/website_assets/images/angularjs.png" alt="AngularJS"/>
                                    <h5 >Angular JS</h5>
                                    </div>

                                    <div className="credentials_content bg1" >
                                    <img src="https://www.codesquadz.com/website_assets/images/reactjs.png" alt="ReactJS"/>
                                    <h5 >React JS</h5>
                                    </div>

                                    <div className="credentials_content bg1" >
                                   <img src="https://www.codesquadz.com/website_assets/images/nodejs.png" alt="NodeJS"/>
                                   <h5 >Node JS</h5>
                                   </div> 
                                </div>
  
                            

                            <div className="credentials_box" style={{marginTop:"50px" }} >
                            <div className="credentials_content bg1" >
                                    <img  src="https://www.codesquadz.com/website_assets/images/spring.png" alt="springboot"/>
                                    <h5>SpringBoot</h5>
                                </div>
                                <div className="credentials_content bg1" >
                                    <img src="https://www.codesquadz.com/website_assets/images/micro.png"  alt="Microservices"/>
                                    <h5 >Microservices</h5>
                                   </div> 
                                   <div className="credentials_content bg1" >
                                   <img src="https://www.codesquadz.com/website_assets/images/html.png"  alt="html"/>
                                   <h5 >HTML</h5>
                                  </div>
                                  <div className="credentials_content bg1">
                                     <img src="https://www.codesquadz.com/website_assets/images/css.png"  alt="css"/>
                                     <h5  >CSS</h5>
                                     </div>
                                     <div className="credentials_content bg1">
                                    <img src="https://www.codesquadz.com/website_assets/images/java-script.png" alt="JavaScript"/>
                                    <h5 >JavaScript</h5>
                                    </div>
                                    <div className="credentials_content bg1">
                                    <img src="https://www.codesquadz.com/website_assets/images/mongodb.png" alt="MongoDB"/>
                                    <h5 >MongoDB</h5>
                                    </div>
                                    
                                </div>

                                <div  className="credentials_box" style={{display:"flex",marginTop:"50px" }} >         
                                <div className="credentials_content bg1">
                                <img src="https://www.codesquadz.com/website_assets/images/python.png" alt="Python"/>
                                <h5>Python</h5>
                               </div>
                               <div className="credentials_content bg1">
                                <img src="https://www.codesquadz.com/website_assets/images/hibernate.png" alt="Hibernate"/>
                                <h5>Hibernate</h5>
                               </div>   
                               <div className="credentials_content bg1">
                                    <img src="https://www.codesquadz.com/website_assets/images/digital-marketing.png" alt="digital Marketing"/>
                                    <h5>Digital Marketing</h5>
                                    </div>
                                 <div className="credentials_content bg1">
                                    <img src="https://www.codesquadz.com/website_assets/images/fullstack.png" alt="Full-Stack"/>
                                    <h5>Full Stack</h5>
                                   </div>
                          </div>

              <div style={{backgroundColor:"aliceblue",marginTop:"50px"}}>
              <h3 className='txt3' >Popular Courses</h3>
              <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true" >
  <div class="carousel-inner">
    <div class="carousel-item active">
    <div className='credentials_box1'>
    <div className="card  credentials_content" style={{width: "25rem",marginLeft:"10px",alignItems:"center"}}>
<img src={m6} className="card-img-top bg1 " style={{width:"24.8rem",padding: "1.5rem 1.5rem"}} alt="m6"/>
<div className="card-body">
<a href="#" style={{textDecoration:"none"}} ><h3 className="card-title fw-bold txt1" style={{marginRight:"17rem"}}>Java</h3></a>
</div>
 <div style={{width:"25rem"}}>
 <hr/>
 </div>
<div className="card-body">
<a href="#" class="btn btn-primary " style={{ backgroundColor:  "rgb(5, 5, 88)",width:"23rem"}}>viwe More</a>
</div>
</div>
<div className="card  credentials_content" style={{width: "25rem",marginLeft:"10px",alignItems:"center"}}>
<img src={t1} className="card-img-top bg1" style={{width:"24.8rem",padding: "1.5rem 1.5rem"}} alt="t1"/>
<div className="card-body">
<a href="#" style={{textDecoration:"none"}} ><h3 className="card-title fw-bold txt1" style={{marginRight:"11rem"}}>Mearn Stack</h3></a>
</div>
<div style={{width:"25rem"}}>
 <hr/>
 </div>
<div className="card-body">
<a href="#" class="btn btn-primary " style={{ backgroundColor:  "rgb(5, 5, 88)",width:"23rem"}}>viwe More</a>
</div>
</div>

<div className="card  credentials_content" style={{width: "25rem",marginLeft:"10px",alignItems:"center"}}>
<img src={t9} className="card-img-top bg1" style={{width:"24.8rem",height:"19.5rem",padding: "1.5rem 1.5rem"}} alt="t9"/>
<div className="card-body">
<a href="#" style={{textDecoration:"none"}} ><h3 className="card-title fw-bold txt1" style={{marginRight:"11rem"}}>Mearn Stack</h3></a>
</div>
<div style={{width:"25rem"}}>
 <hr/>
 </div>
<div className="card-body">
<a href="#" class="btn btn-primary " style={{ backgroundColor:  "rgb(5, 5, 88)",width:"23rem"}}>viwe More</a>
</div>
</div>
</div>
    </div>

    <div class="carousel-item">
       <div className='credentials_box1'>
                     <div className="card  credentials_content" style={{width: "25rem",marginLeft:"10px",alignItems:"center"}}>
              <img src={t3} className="card-img-top bg1" style={{width:"24.8rem",padding: "1.5rem 1.5rem"}} alt="t3"/>
              <div className="card-body">
              <a href="#" style={{textDecoration:"none"}} ><h3 className="card-title fw-bold txt1" style={{marginRight:"11rem"}}>Mearn Stack</h3></a>
              </div>
              <div style={{width:"25rem"}}>
               <hr/>
               </div>
              <div className="card-body">
              <a href="#" class="btn btn-primary " style={{ backgroundColor:  "rgb(5, 5, 88)",width:"23rem"}}>viwe More</a>
              </div>
               </div>
               <div className="card  credentials_content" style={{width: "25rem",marginLeft:"10px",alignItems:"center"}}>
               <img src={t4} className="card-img-top bg1" style={{width:"24.8rem",padding: "1.5rem 1.5rem"}} alt="t4"/>
               <div className="card-body">
               <a href="#" style={{textDecoration:"none"}} ><h3 className="card-title fw-bold txt1" style={{marginRight:"11rem"}}>Mearn Stack</h3></a>
               </div>
               <div style={{width:"25rem"}}>
                <hr/>
                </div>
               <div className="card-body">
               <a href="#" class="btn btn-primary " style={{ backgroundColor:  "rgb(5, 5, 88)",width:"23rem"}}>viwe More</a>
               </div>
                </div>
                <div className="card  credentials_content" style={{width: "25rem",marginLeft:"10px",alignItems:"center"}}>
                <img src={t5} className="card-img-top bg1" style={{width:"24.8rem",padding: "1.5rem 1.5rem"}} alt="t5"/>
                <div className="card-body">
                <a href="#" style={{textDecoration:"none"}} ><h3 className="card-title fw-bold txt1" style={{marginRight:"11rem"}}>Mearn Stack</h3></a>
                </div>
                <div style={{width:"25rem"}}>
                 <hr/>
                 </div>
                <div className="card-body">
                <a href="#" class="btn btn-primary " style={{ backgroundColor:  "rgb(5, 5, 88)",width:"23rem"}}>viwe More</a>
                </div>
                 </div>
               </div>
    </div>
    
    <div class="carousel-item">
    <div className='credentials_box1'>
    <div className="card  credentials_content" style={{width: "25rem",marginLeft:"10px",alignItems:"center"}}>
<img src={t6} className="card-img-top bg1" style={{width:"24.8rem",padding: "1.5rem 1.5rem"}} alt="t6"/>
<div className="card-body">
<a href="#" style={{textDecoration:"none"}} ><h3 className="card-title fw-bold txt1" style={{marginRight:"11rem"}}>Mearn Stack</h3></a>
</div>
<div style={{width:"25rem"}}>
 <hr/>
 </div>
<div className="card-body">
<a href="#" class="btn btn-primary " style={{ backgroundColor:  "rgb(5, 5, 88)",width:"23rem"}}>viwe More</a>
</div>
</div>
<div className="card  credentials_content" style={{width: "25rem",marginLeft:"10px",alignItems:"center"}}>
<img src={t7} className="card-img-top bg1" style={{width:"24.8rem",padding: "1.5rem 1.5rem"}} alt="t7"/>
<div className="card-body">
<a href="#" style={{textDecoration:"none"}} ><h3 className="card-title fw-bold txt1" style={{marginRight:"11rem"}}>Mearn Stack</h3></a>
</div>
<div style={{width:"25rem"}}>
 <hr/>
 </div>
<div className="card-body">
<a href="#" class="btn btn-primary " style={{ backgroundColor:  "rgb(5, 5, 88)",width:"23rem"}}>viwe More</a>
</div>
</div>
<div className="card  credentials_content" style={{width: "25rem",marginLeft:"10px",alignItems:"center"}}>
<img src={t8} className="card-img-top " style={{width:"24.8rem",padding: "1.5rem 1.5rem"}} alt="t8"/>
<div className="card-body">
<a href="#" style={{textDecoration:"none"}} ><h3 className="card-title fw-bold txt1" style={{marginRight:"11rem"}}>Mearn Stack</h3></a>
</div>
<div style={{width:"25rem"}}>
 <hr/>
 </div>
<div className="card-body">
<a href="#" class="btn btn-primary " style={{ backgroundColor:  "rgb(5, 5, 88)",width:"23rem"}}>viwe More</a>
</div>
</div>
</div>
    </div>

    <div class="carousel-item">
    <div className='credentials_box1'>
    <div className="card  credentials_content" style={{width: "25rem",alignItems:"center"}}>
<img src={t2} className="card-img-top bg1" style={{width:"24.8rem",padding: "1.5rem 1.5rem"}} alt="t2"/>
<div className="card-body">
<a href="#" style={{textDecoration:"none"}} ><h3 className="card-title fw-bold txt1" style={{marginRight:"11rem"}}>Mearn Stack</h3></a>
</div>
<div style={{width:"25rem"}}>
 <hr/>
 </div>
<div className="card-body">
<a href="#" class="btn btn-primary " style={{ backgroundColor:  "rgb(5, 5, 88)",width:"23rem"}}>viwe More</a>
</div>
</div>

</div>
    </div>

  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
  <span> <img className="navbar-brand" aria-hidden="true" style={{width:"50px",height:"60px",backgroundColor:"none"}} src={pre} alt="logo"/></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
 <span> <img className="navbar-brand" aria-hidden="true" style={{width:"5n0px",height:"60px",backgroundColor:"none"}} src={next} alt="logo"/></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
              </div>

              <div style={{backgroundColor:"rgb(5, 5, 88)"}}>
              <h3 className='txt3'>Our Student Says</h3>
              <div class="container">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex align-items-center" >
      <a href="/" class="mb-3 me-2 mb-md-0  text-decoration-none lh-1">
      </a>
      <span class="mb-3 mb-md-0 " style={{color:"white"}} >{new Date().getFullYear()}
      {'.'} Company, Inc</span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
       <li>   <img className="navbar-brand" style={{width:"2.3rem",marginTop:"1rem"}} src={fb} alt="logo"/> </li>
      <li class="ms-3"> <img className="navbar-brand"  style={{width:"2.3rem",marginTop:"1rem"}} src={inst} alt="logo"/></li>
      <li class="ms-3"> <img className="navbar-brand" style={{width:"2.6rem",marginTop:".9rem"}} src={ind} alt="logo"/></li>
    </ul>
  </footer>
</div>
              </div>
        </div>      
         
   </>
  )
}
