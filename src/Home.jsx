import * as React from 'react';
import 'animate.css';
import NavBar from './NavBar';

import "./Assets/Css/style.css"
import { Link } from 'react-router-dom';
import Jumbtron from './Assets/Video/Jumbtron';
import Offers from './Offers';
import Footor1 from './Footor1';
import Hero from './Assets/product/Hero';

import CorseTxt from './CorseTxt';
import Doubts from './Doubts';
import Follow from './Follow';
import Hero1 from './Hero1';

export default function Home() {
   
  return (
    <>
    <NavBar />
    <div className='cube'></div>
    <div className='cube'></div>
    <div className='cube'></div>
    <div className='cube'></div>
    <div className='cube'></div>
    <Hero1/>
   
   
    <div className='container'>
    <div className='l-card-row '>
    <section className="l-section l-padding-top-20 ">
    <div className=" ">
        <div className="l-row--1024 ">
            <div className="l-row--992 ">
           <div className='m-head__8'>
          <span className='title1'>Popular</span>
          <span style={{marginLeft:"15px"}}>Courses</span>
          </div>
            <div className="l-card-row">
              <Link to={'/Java'} >
           <div className="l-card-13 ">
    <img className="m-novice-card-1 " style={{width:"250px",height:"150px"}} alt="java" src="https://i.pinimg.com/736x/23/f2/05/23f2053c05cbfbb8236dab9e85d0249f.jpg" />
                                <div className="l-card-content ">
                                    Get Started with Java
                                </div>
                            </div>
                        </Link>
                        <Link to={'/Python'}>
                            <div className="l-card-13">
                            
                                <img className="m-novice-card-2" alt="java" src="https://i.pinimg.com/originals/bf/c9/4e/bfc94e209de9b2350fba47eec2621e04.jpg" />
                                <div className="l-card-content">
                                    Get Started with Python
                                </div>
                            </div>
                        </Link>
                        <Link to={'/Android'} >
                            <div className="l-card-13" >
                            
                                <img className="m-novice-card-3" alt="java" src='https://1.bp.blogspot.com/-GykUckY6bNQ/W-lXkhBi4YI/AAAAAAAAAKg/N1hVeDeo92kMdkCxNLFDpNJRW08PGa3LACLcBGAs/s1600/IMG_20181112_183456.png' />
                                <div className="l-card-content">
                                    Get Started with Android
                                </div>
                            </div>
                        </Link>
                     
                    <Link to="">
                                <div className="l-card-13">
                                    <img className="m-uc-card" alt="java" src='https://th.bing.com/th/id/R.1141dd90df4406d92c3c6c183a036a04?rik=jG%2fpP2AlDrw%2fxA&riu=http%3a%2f%2fkhoapham.vn%2fpublic%2fimages%2flogo%2freactjs.png&ehk=6Uw%2fPj%2b7IwpoNcL%2fNs3O9OiD%2bKYTaRDZBWglMqkXNok%3d&risl=&pid=ImgRaw&r=0' />
                                    <div className="l-card-content">
                                    Get Started with React JS
                                    </div>
                                </div>
                            </Link>
                            
                         </div></div>
                          <div className="l-row--992 divs">
                            <div className="l-card-row divs">
                                <Link to="">
                                <div className="l-card-13">
                                
                                <img className="m-novice-card-4" alt="java" src='https://2.bp.blogspot.com/-UWaFIDunDrs/XD7uoohDgJI/AAAAAAAAKXc/2k_TDvP_s_c0xkBwqJPvNQfWDnopcyeaACLcBGAs/s400/angular-JS-question.jpg' />
                                    <div className="l-card-content">
                                    Get Started with Angular JS
                                    </div>
                                </div>
                            </Link>
                            <Link to="">
                                <div className="l-card-13">
                                
                            <img className="m-novice-card-5" alt="java" src='https://images.yourstory.com/cs/1/b3c9ea44-ab5e-11e8-8691-f70342131e20/Nodejs1547640840225.jpg?fm=auto&ar=2:1&mode=crop&crop=faces&w=400' />
                                    <div className="l-card-content">
                                    Get Started with Node JS
                                    </div>
                                </div>
                            </Link>
                            <Link to="">
                            <div className="l-card-13">
                            
                        <img className="m-novice-card-5" alt="java" src='https://www.suneratech.com/wp-content/uploads/2020/09/Ebutor-AWS-case-study-2020-09-11-thumbnail-Image-1.jpg' />
                                <div className="l-card-content">
                                Get Started with AWS
                                </div>
                            </div>
                        </Link>
                        <Link to="">
                        <div className="l-card-13">
                        
                    <img className="m-novice-card-5" alt="java" src='https://www.galxion.com/wp-content/uploads/2021/03/Effectively-Digital-Marketing-scaled.jpeg' />
                            <div className="l-card-content">
                            Get Started with Digital Marketing
                            </div>
                        </div>
                    </Link>
                        
                            </div></div>
                            <div className="l-row--992 divs">
                           
                    <div className="l-card-row divs">
                        <Link to="">
                            <div className="l-card-13">
                            
                                <img className="m-novice-card-5" alt="java" src='https://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLAvlDzQ15FPe3KgjjqEicqtibUvAmYYnMpyAhmRT737ibRAAYPIfI7jjCWF8ussvQfibfs/356'/>
                                <div className="l-card-content">
                                Get Started with Spring Boot
                                </div>
                            </div>
                        </Link>
                        <Link to="">
                        <div className="l-card-13">
                        
                        <img className="m-novice-card-5" alt="java" src='https://www.freelancinggig.com/blog/wp-content/uploads/2018/04/Spring-Framework-Guide.png' />
                            <div className="l-card-content">
                            Get Started with Spring 
                            </div>
                        </div>
                        </Link>
                        <Link to="">
                            <div className="l-card-13">
                            
                            <img className="m-novice-card-5" alt="java" src='https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/218201901/original/4e9afc4f30be75b72beed6c01f91df24e2261b37/develop-your-micro-service.jpg' />
                                <div className="l-card-content">
                                Get Started with Microservices 
                                </div>
                            </div>
                        </Link>
                        <Link to="">
                        <div className="l-card-13">
                        
                        <img className="m-novice-card-5" alt="java" src='https://www.learntek.org/wp-content/uploads/2017/04/hibernate.jpg' />
                            <div className="l-card-content">
                            Get Started with Hibernate <br/> 
                            </div>
                        </div>
                    </Link>
                    </div></div> 
                            <div className="l-row--992 divs">
                      
                            <div className="l-card-row">
                            <Link to="">
                            <div className="l-card-13">
                            <img className="m-novice-card-5" alt="java" src='https://i.pinimg.com/originals/fa/e8/62/fae862fff4f6100d000a1c01c4030db0.jpg' />
                                <div className="l-card-content">
                                Get Started with FullStack
                                </div>
                            </div>
                        </Link>
                        <Link to="">
                        <div className="l-card-13">
                        <img className="m-novice-card-5" alt="java"  src='https://frontcast.ir/wp-content/uploads/2019/11/mern-stack.png' />
                            <div className="l-card-content">
                            Get Started with MearnStack
                            </div>
                        </div>
                    </Link>
                    <Link to="">
                    <div className="l-card-13">
                    <img className="m-novice-card-5" alt="java" src='https://www.technology4u.in/wp-content/uploads/2021/07/mean-stack-image1.png' />
                        <div className="l-card-content">
                        Get Started with MeanStack
                        </div>
                    </div>
                </Link>
                <Link to="">
                <div className="l-card-13">
                <img className="m-novice-card-5" alt="java" src='https://th.bing.com/th/id/OIP.3jpd5kt6gLzMdJt6VBan2AHaEZ?pid=ImgDet&rs=1' />
                    <div className="l-card-content">
                    Get Started with Python FullStack
                    </div>
                </div>
            </Link>
                    </div>
                    <div className="l-card-row">
                        <Link to="">
                            <div className="l-card-13">
                                
                <img className="m-novice-card-5" alt="java" src='https://i.ytimg.com/vi/ma1p17RJfLY/maxresdefault.jpg' />
                                <div className="l-card-content">
                              <span style={{color:"red"}}> ★ HTML</span>
                                </div>
                            </div>
                        </Link>
                        <Link to="">
                            <div className="l-card-13">
                            
                        <img className="m-novice-card-5" alt="java" src='https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/453689/29-CSS__2x-3a5f9ecad40f39e372110b676dba5ac0.png'/>
                                <div className="l-card-content">
                                   <span style={{color:"red"}}> ★ CSS</span>
                                    
                                </div>
                            </div>
                        </Link>
                        <Link to="">
                            <div className="l-card-13">
                    <img className="m-novice-card-5" alt="java" src='https://i.pinimg.com/originals/d7/00/00/d7000000a0ffe7051315b0b44d7b1a34.png' />
                                <div className="l-card-content">
                                <span style={{color:"red"}}> ★ JAVA SCRIPT</span>
                                    
                                </div>
                            </div>
                        </Link>
                        <Link to="">
                            <div className="l-card-13">  
                                <img className="m-novice-card-5" alt="java"  src='https://rndimaging.com/uploads/services/1591291922.jpg'/>
                                <div className="l-card-content">
                                <span style={{color:"red"}}> ★ XML</span>
                                    
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>           
        </div>
    </div>
</section>
</div>
<Hero/>

<Offers/>

</div> 
<CorseTxt/>
<Doubts/>
<Follow/>
<Jumbtron/>

   <Footor1/>
    </>
  );
}

