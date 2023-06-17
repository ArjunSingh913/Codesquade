
import React from 'react';
import sir from './Assets/Images/tanaysir.png'
import Customor from './Assets/product/Customor';
import NavBar from './NavBar';
import Footor1 from './Footor1';
export default function Python() {
  return (
   <>
   <NavBar/>
   <Customor title="Python" img1={sir}
 img="https://i.pinimg.com/originals/bf/c9/4e/bfc94e209de9b2350fba47eec2621e04.jpg"  img2="https://i.pinimg.com/originals/bf/c9/4e/bfc94e209de9b2350fba47eec2621e04.jpg" 
 img3="https://i.pinimg.com/originals/bf/c9/4e/bfc94e209de9b2350fba47eec2621e04.jpg"  img4="https://i.pinimg.com/originals/bf/c9/4e/bfc94e209de9b2350fba47eec2621e04.jpg" 
 img5="https://i.pinimg.com/originals/bf/c9/4e/bfc94e209de9b2350fba47eec2621e04.jpg" 
 head="Python" head1="Courses" mentor="Mr. Tanay Mishra"
 work="Work On Live Project"
corse1="Best Python Training Course" corse2="Python Full Stack Training" corse3="Data Analytics Using Python" corse4="Data Science & ML In Python" 
    corse5="AI Using Python Training"  
    />
    <Footor1/>
   </>
  )
}
