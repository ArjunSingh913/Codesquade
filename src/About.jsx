import React from 'react'

import Nav from './NavBar'
import Team from './Assets/Css/Team'
import AboutCode from './AboutCode'
import Footor1 from './Footor1'
import Feedback from './Feedback'
export default function About() {
  return (
	<>
	<Nav/>
	
	<div class="page-header min-vh-75 ">
	  <div class="container">
		<div class="row">
		  <div class="col-lg-4 my-auto">
			<h1 class="text-gradient text-warning mb-0">Your Desired</h1>
			<h1 class="mb-4">Experiences</h1>
			<p class="lead">The time is now for it to be okay to be great. For being a bright color. For standing out.</p>
			<div class="buttons">
			  <button type="button" class="btn1 btn bg-gradient-warning mt-4">Discover</button>
			  <button type="button" class="btn btn1 text-warning shadow-none mt-4">Read more</button>
			</div>
		  </div>
		  <div class="col-lg-8 ps-5 pe-0 ">
			<div class="row">
			  <div class="col-lg-3 col-6 mt-5">
				<img class="w-100 rounded-4 shadow mt-0 mt-lg-7" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/desire.jpg" alt=""/>
			  </div>
			  <div class="col-lg-3 col-6">
				<img class="w-100 rounded-4  shadow" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/chair.jpg" alt=""/>
				<img class="w-100 rounded-4 shadow mt-4" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/facade.jpg" alt=""/>
			  </div>
			  <div class="col-lg-3 col-6">
				<img class="w-100 rounded-4 shadow mt-0 mt-lg-5" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/architecture.jpg" alt=""/>
				<img class="w-100 rounded-4 shadow mt-4" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/baloon.jpg" alt=""/>
			  </div>
			  <div class="col-lg-3 col-6">
				<img class="w-100 rounded-4 shadow mt-3" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/seaside.jpg" alt=""/>
				<img class="w-100 rounded-4 shadow mt-4" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/medusa.jpg" alt=""/>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	</div>
	
 
		<AboutCode/>								

	<div className='container ' style={{display:"flex",justifyItems:"baseline"}}>
	<div class="px-4 py-5 my-5 text-center bg-success bg-opacity-50 shadow-lg  rounded-4" style={{height:"25rem",width:"30rem",}}>
    <h1 class="display-5 mt-5">What Our Client Says About CodeSquadz</h1>
  </div>
  <div id="carouselExampleDark" class="carousel carousel-dark slide px-4 py-5 " style={{height:"30rem",width:"60rem",}}>
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner shadow-lg bg-dark rounded-4">
    <div class="carousel-item active "  data-bs-interval="10000">
    <iframe width="860" height="390" src="https://www.youtube.com/embed/dpEfTwE4dQE" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; allowfullscreen;"></iframe>
      
    </div>
    <div class="carousel-item" data-bs-interval="2000">
    <iframe width="860" height="390" src="https://www.youtube.com/embed/myTjpTW_oDs" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; allowfullscreen;"></iframe>
     
    </div>
    <div class="carousel-item">
    <iframe width="860" height="390" src="https://www.youtube.com/embed/hQFPVbc9fvQ" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; allowfullscreen;"></iframe>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

  </div>
  <Team/>
  <Feedback/>
  <Footor1/>
	</>
  )
}
