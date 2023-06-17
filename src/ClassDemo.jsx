import React from 'react'

export default function ClassDemo(props) {
  return (
   <>
   <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" >
  <div className="modal-dialog modal-dialog-centered ">
    <div className="modal-content Demo ">
      <div className="modal-header ">
        <h1 className="modal-title fs-5 text" id="exampleModalToggleLabel">Java Demo 1</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/LQJg7b0Nix0" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; allowfullscreen"></iframe>
      </div>
      <div className="modal-footer">
<button className="btn btn-outline-light Democlass " style={{marginTop:"2rem",border:"1"}} data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Python Demo</button>
      </div>
    </div>
  </div>
</div>
<div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" >
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content Demo">
      <div className="modal-header">
        <h1 className="modal-title fs-5 text" id="exampleModalToggleLabel2">Python Demo</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/ChxAWM3C1FA" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; allowfullscreen"></iframe>
      </div>
      <div className="modal-footer">
        <button  className="btn btn-outline-light Democlass " style={{marginTop:"2rem",border:"1"}} data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Back to first</button>
      </div>
    </div>
  </div>
</div>
<button className="btn btn-outline-light" style={{marginTop:"2rem",border:"0"}} data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Demo Classes</button>
   </>
  )
}
