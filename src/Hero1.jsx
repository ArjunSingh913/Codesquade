import React from 'react'
import img from './Assets/Images/08.png'
import img1 from './Assets/Images/01.jpg'
import img2 from './Assets/Images/02.jpg'
import img3 from './Assets/Images/03.jpg'
import img4 from './Assets/Images/04.jpg'
export default function Hero1() {
  return (
   <>
  <section className="position-relative">
	<div className="container position-relative">
		<div className="row g-4 align-items-center">
			<div className="col-md-6 position-relative">
				
				<div className="d-flex align-items-center mb-4">
					<div className="g-body  rounded-circle  shadow fs-6 text-warning">
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-lightbulb" viewBox="0 0 16 16">
  <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z"/>
</svg>
					</div>
					<span className="h6 ms-3 mb-0">Grow Your Future With Us</span>
				</div>

			
				<h1 className="mb-4 display-6 ">Let's Learn New Courses & Gain
					<span className="position-relative z-index-9">More Skills
					</span>
					<figure className="fill-danger opacity-2 position-absolute top-0 start-0 translate-middle mb-3">
							<svg width="211px" height="211px">
								<path d="M210.030,105.011 C210.030,163.014 163.010,210.029 105.012,210.029 C47.013,210.029 -0.005,163.014 -0.005,105.011 C-0.005,47.015 47.013,-0.004 105.012,-0.004 C163.010,-0.004 210.030,47.015 210.030,105.011 Z"></path>
							</svg>
						</figure>
				</h1>

				<p className="mb-4 lead text-body-secondary ">A Learning platform based on practical knowledge with beast & world class mentors.</p>
				
               
				<div className="d-lg-flex mb-4">
					<a href="#" className="btn btn-primary me-4">View Courses<i className="bi bi-arrow-right ms-2"></i></a>
					<a href="#" className="btn btn-light"><i className="fas fa-photo-video me-2"></i>See it in action<i className="bi bi-arrow-right ms-2"></i></a>
				</div>

				
				<div className="d-sm-flex align-items-center">
					<ul className="avatar-group mb-2 mb-sm-0">
						<li className="avatar avatar-sm"><img className="avatar-img rounded-circle" src={img1} alt="avatar"/></li>
						<li className="avatar avatar-sm"><img className="avatar-img rounded-circle" src={img2} alt="avatar"/></li>
						<li className="avatar avatar-sm"><img className="avatar-img rounded-circle" src={img3} alt="avatar"/></li>
						<li className="avatar avatar-sm"><img className="avatar-img rounded-circle" src={img4} alt="avatar"/></li>
					</ul>
				
					<p className="mb-0 h6 ms-0 ms-sm-3">Trusted by over 15K Users Worldwide Since 2022</p>
				</div>
			</div>
			
		
			<div className="col-md-2">
				<img  style={{height:"35rem",width:"44rem",}} src={img} alt=""/>
			</div>
		</div>
	</div>
	
</section>
				
   </>
  )
}
