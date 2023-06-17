import React from 'react'
import ban from './Assets/Images/ban1.png'
import img from './Assets/Images/tanaysir.png'
export default function AboutCode() {
  return (
    <>
    

    <section class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="row">
            <div class="col-lg-6 justify-content-center d-flex flex-column">
              <div class="card rounded-3">
                <div class="d-block blur-shadow-image">
                  <img src={ban} alt="img-blur-shadow-blog-2" width={"100%"} class="img-fluid shadow rounded-3"/>
                </div>
              </div>
            </div>
            <div class="col-lg-6 justify-content-center d-flex flex-column ps-lg-5 pt-lg-0 pt-3">
              <h6 class="category text-info mt-3">Our Mentor</h6>
              <h3>
                <a href="javascript:;" class="text-darker">Mr. Manish Bhatia Sir</a>
              </h3>
              <p  >
              Mr. Manish Bhatia Sir works here as a JAVA consultant and he is the co-founder of CodeSquadz. He holds a massive experience of more than 20 years as a teacher of JAVA.</p>
              <p> With our collaboration with industry expert Mr. Manish Bhatia sir, we are continuously providing professional education to every student. Our industry expert faculty makes us the best <strong> JAVA Training IT Company in Noida </strong>by providing industrial training to all students to let them become job-ready...<br/><a href="javascript:;" class="text-darker icon-move-right text-sm">Read More
                  <i class="fas fa-arrow-right text-xs ms-1"></i>
                </a>
              </p>
              
            </div>
          </div>
        </div>
        <div class="col-lg-12 mt-5">
          <div class="row flex-row-reverse">
            <div class="col-lg-6 justify-content-center d-flex flex-column">
              <div class="card rounded-3">
                <div class="blur-shadow-image">
                  <img src={img} width={"100%"} alt="img-blur-shadow-blog-2" class="img-fluid shadow rounded-3"/>
                </div>
              </div>
            </div>
            <div class="col-lg-6 pe-lg-5 justify-content-center d-flex flex-column pt-lg-0 pt-3">
              <h6 class="category text-info mt-3">Our Mentor</h6>
              <h3>
                <a href="javascript:;" class="text-darker">Mr.Tanay Mishra Sir</a>
              </h3>
              <p>
                Warner Music Group announced today it’s acquiring the selected assets of the music platform Songkick, including its app for finding concerts and the company’s trademark. Songkick has been involved in a lawsuit against the major… <br/><a href="javascript:;" class="text-darker icon-move-right text-sm">Read More
                  <i class="fas fa-arrow-right text-xs ms-1"></i>
                </a>
              </p>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
    </>
  )
}
