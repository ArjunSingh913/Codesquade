import React from 'react'
export default function Jumbtron() {
  return (
   <>
   <div class="px-4  text-center jumbackground " style={{borderRadius:"50px 50px 0px 0px",marginTop:"40px"}}>
   <div class="py-5">
   </div>
   <h1 class="display-5 fw-bold text-light">Subscribe Now!</h1>
   <div class="col-lg-6 mx-auto">
     <p class="lead mb-4">CodeSquadz is an outstanding educational institute committed to providing Education Towards <strong className='text-light'>Excellence! </strong>We offer various professional courses in the IT field to kick-start the careers of our students.</p>
     <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
       <button type="button" class="btn btn-warning btn-lg px-4 gap-3" data-bs-target="#carouselExampleDark" data-bs-slide="prev">Previous</button>
       <button type="button" class="btn btn-outline-warning btn-lg px-4" data-bs-target="#carouselExampleDark" data-bs-slide="next">Next</button>
     </div>
   </div>
  

   <div class=" " style={{borderRadius:"50px 50px 0px 0px",marginTop:"40px"}}>
   
 <div id="carouselExampleDark" class="carousel carousel-light slide " >
 <div class="carousel-indicators">
   <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
   <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
   <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
 </div>
 <div class="carousel-inner ">
   <div class="carousel-item active "  data-bs-interval="10000">
   <iframe width="990" height="490" style={{borderRadius:"50px 50px 0px 0px"}} src="https://www.youtube.com/embed/t-iluPDgdww" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; allowfullscreen;"></iframe>
   </div>
   <div class="carousel-item" data-bs-interval="2000">
   <iframe width="990" height="490" style={{borderRadius:"50px 50px 0px 0px"}} src="https://www.youtube.com/embed/z12RdHKHY8k" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; allowfullscreen;"></iframe>
   </div>
   <div class="carousel-item">
   <iframe width="990" height="490" style={{borderRadius:"50px 50px 0px 0px"}} src="https://www.youtube.com/embed/c4EYYjJokTQ" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; allowfullscreen;"></iframe>
   </div>
 </div>
 
</div>
   </div>
 </div>
    
 
 
   </>
  )
}
