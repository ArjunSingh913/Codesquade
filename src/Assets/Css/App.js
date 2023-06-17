import * as React from 'react';
import "./Assets/Css/style.css"
import p1 from './Assets/Images/fb4.png'
import p2 from './Assets/Images/in6.webp'
import p4 from './Assets/Images/twit2.png'
import p5 from './Assets/Images/you.png'
import p6 from './Assets/Images/pin3.png'
import whatsapp from './Assets/Images/what.png'
import phone from './Assets/Images/phone-call.png'
import './product.css';
import s1 from './Assets/Images/tp.png'
import java from './Assets/Images/java.png';
import m1 from './Assets/Images/img7.webp';
import fb from './Assets/Images/f1.png'
import inst from './Assets/Images/instag.png'
import ind from './Assets/Images/ind.png'
import python from './Assets/Images/design1.png'
import 'animate.css';

export default function App() {
  return (
   <>
   <div className='bgcolor'>
<ul className="nav justify-content-end  ">
<li style={{marginRight:"38rem"}}>
<a className="navbar-brand" href="#"><img  style={{width:"2.5rem",marginTop:"2.4rem"}} src={p1} alt="logo"/></a>
  <a className="navbar-brand" href="#"><img  style={{width:"2.2rem",marginTop:"2.5rem",marginLeft:"4px"}} src={inst} alt="logo"/></a>
  <a className="navbar-brand" href="#"><img  style={{width:"2.6rem",marginTop:"2.5rem",marginLeft:"3px"}} src={p4} alt="logo"/></a>
  <a className="navbar-brand" href="#"><img  style={{width:"2.6rem",marginTop:"2.5rem",marginLeft:"2px"}} src={p5} alt="logo"/></a>
  <a className="navbar-brand" href="#"><img  style={{width:"2.7rem",marginTop:"2.5rem",marginLeft:"2px"}} src={p2} alt="logo"/></a>
  <a className="navbar-brand" href="#"><img  style={{width:"2.8rem",marginTop:"2.5rem",marginLeft:"2px"}} src={p6} alt="logo"/></a>
  </li>
  <li className="nav-item" style={{marginTop:"1.8rem"}}>
  <a className="nav-link" href="https://api.whatsapp.com/send/?phone=919289135096&amp;text=Hi%21&amp;type=phone_number&amp;app_absent=0"><img  style={{width:"3rem"}} src={whatsapp} alt="logo"/>+91- 9289135096</a>
  </li>
  
  <li className="nav-item" style={{marginTop:"2.3rem"}}>
  <a className="nav-link" href="tel:+917879332211"><img  style={{width:"1.7rem"}} src={phone} alt="logo"/>78-79-33-22-11</a>
  </li>

<li className="nav-item">
<button type="button" className="btn btn-outline-light"  style={{marginTop:"2rem",border:"0"}}></button>
</li>
<li className="nav-item">
<button type="button" className="btn btn-outline-light"  style={{marginTop:"2rem",border:"0",marginRight:"5rem"}}></button>
</li>

</ul>

<ul className="nav justify-content-end background ">
<a className="navbar-brand" href="#"><img  style={{width:"13rem",marginTop:"1.4rem",marginRight:"40rem"}} src="https://www.codesquadz.com/web_assets/img/aelogowhitenew.png" alt="logo"/></a>
<li className="nav-item" >
 <a href="App" ><button type="button" className="btn btn-outline-light"style={{marginTop:"2rem",border:"0"}}>Home</button></a>
</li>
<div className="dropdown-center">
<button className="btn btn-outline-light dropdown-toggle" style={{marginTop:"2rem",border:"0"}} type="button" data-bs-toggle="dropdown" aria-expanded="false">
   Course
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="Java">Java</a></li>
    <li><a className="dropdown-item" href="Python">Python</a></li>
    <li><a className="dropdown-item" href="Android">Android</a></li>
  </ul>
</div>
<li className="nav-item">
<a href='Certificate'><button type="button" className="btn btn-outline-light"  style={{marginTop:"2rem",border:"0"}}>Certificate</button></a>
</li>

<li className="nav-item">
<button type="button"className="btn btn-outline-light"  style={{marginTop:"2rem",border:"0"}}>About Us</button>
</li>
<li className="nav-item">
<button type="button"className="btn btn-outline-light"  style={{marginTop:"2rem",border:"0",marginRight:"5rem"}}>Contact Us</button>
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


<div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
    <div className="col-md-5 p-lg-5 mx-auto my-5">
      <h1 className="display-4 fw-normal">Java By Manish Bhatia Sir</h1>
      <p className="lead fw-normal"> <strong>Mr. Manish Bhatia (JAVA Consultant)</strong>
    has more than 20+ years of experience in teaching JAVA. He has the required expertise and knows how to shape the future of any aspirant.</p>
      <a className="btn btn-outline-secondary animate__animated animate__bounce animate__infinite" href="java">Go To Course</a>
    </div>
    <div >
    <img className="product-device shadow-sm d-none d-md-block animate__animated animate__slideInUp" src={m1} style={{width: "30%"}} alt="logo"/>
    
 </div>
    
    <img className="product-device product-device-2 shadow-sm d-none d-md-block animate__animated animate__slideInDown" src={java} style={{width: "350px",height:"440"}} alt="logo"/>
  </div>

  <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
  <div className="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
    <div className="my-3 py-3">
      <h2 className="display-5">Python By Tanay Sir</h2>
      <p className="lead">Start your walk towards success with this IT training program by augmenting IT skills.</p>
    </div>
    <a className="btn btn-outline-secondary animate__animated animate__bounce animate__infinite" href="java" style={{backgroundColor:"white"}}>Go To Course</a>
    <div style={{display:"flex",justifyContent:"space-between"}}>
    <img className="bg-light shadow-sm mx-auto"  src={python}  style={{width:"70%", height: "400px", borderRadius: "21px 21px 0 0"}} alt="logo"/>
   
  </div></div>
  <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
    <div className="my-3 p-3">
      <h2 className="display-5">Another headline</h2>
      <p className="lead">And an even wittier subheading.</p>
    </div>
    <div className="bg-dark shadow-sm mx-auto" style={{width:"80%", height: "300px", borderRadius: "21px 21px 0 0"}}></div>
  </div>
</div>

<div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
    <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div className="my-3 p-3">
        <h2 className="display-5">Another headline</h2>
        <p className="lead">And an even wittier subheading.</p>
      </div>
      <div className="bg-dark shadow-sm mx-auto" style={{width:"80%", height: "300px", borderRadius: "21px 21px 0 0"}}></div>
    </div>
    <div className="text-bg-primary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div className="my-3 py-3">
        <h2 className="display-5">Another headline</h2>
        <p className="lead">And an even wittier subheading.</p>
      </div>
      <div className="bg-light shadow-sm mx-auto" style={{width:"80%", height: "300px", borderRadius: "21px 21px 0 0"}}></div>
    </div>
  </div>

  <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
    <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div className="my-3 p-3">
        <h2 className="display-5">Another headline</h2>
        <p className="lead">And an even wittier subheading.</p>
      </div>
      <div className="bg-body shadow-sm mx-auto" style={{width:"80%", height: "300px", borderRadius: "21px 21px 0 0"}}></div>
    </div>
    <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div className="my-3 py-3">
        <h2 className="display-5">Another headline</h2>
        <p className="lead">And an even wittier subheading.</p>
      </div>
      <div className="bg-body shadow-sm mx-auto" style={{width:"80%", height: "300px", borderRadius: "21px 21px 0 0"}}></div>
    </div>
  </div>


              <div style={{backgroundColor:"rgb(5, 5, 88)"}}>
              <h3 className='txt3'>Our Student Says</h3>
              <div className="container">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center" >
      <a href="/" className="mb-3 me-2 mb-md-0  text-decoration-none lh-1">
      </a>
      <span className="mb-3 mb-md-0 " style={{color:"white"}} >{new Date().getFullYear()}
      {'.'} Company, Inc</span>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
       <li>   <img className="navbar-brand" style={{width:"2.3rem",marginTop:"1rem"}} src={fb} alt="logo"/> </li>
      <li className="ms-3"> <img className="navbar-brand"  style={{width:"2.3rem",marginTop:"1rem"}} src={inst} alt="logo"/></li>
      <li className="ms-3"> <img className="navbar-brand" style={{width:"2.6rem",marginTop:".9rem"}} src={ind} alt="logo"/></li>
    </ul>
  </footer>
</div>
              </div>
        </div>      
         

        
   </>
  )
}
