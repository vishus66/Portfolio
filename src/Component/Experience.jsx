import React from 'react'
import { Link } from 'react-router-dom'

export default function Experience() {
  return (
    <>
      <div className="bg-color" id="about">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="d-flex align-items-center mb-5">
                <div className="years flex-shrink-0 text-center me-4">
                  <h1 className="display-1 mb-0">6</h1>
                  <h5 className="mb-0">Month</h5>
                </div>
                <h3 className="lh-base mb-0">of working experience as a web developer</h3>
              </div>
              <ul>
                <li>Developed an Employee Data Management System using Node.js, Express.js, and MongoDB.</li>
                
                <li>Gained insights into RESTful API development and asynchronous programming.</li>
                <li>Created an E-commerce Website from scratch with React JS </li>
                <li>Implemented user authentication, product inventory management.</li>
                <li>Built a Real-Time Chat Application utilizing Socket.IO.</li>
                <li>Enabled seamless communication between users with instant messaging.</li>
              </ul>
              <Link className="btn btn-primary bt-color py-3 px-5 mt-3" to='/project'>Project</Link>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="row g-3 mb-4">
                <div className="col-sm-6">
                  <img className="img-fluid rounded" src="img/webpic.png" height='200px' alt="" />
                </div>
                <div className="col-sm-6">
                  <img className="img-fluid rounded" src="img/webpec2.png" alt="" />
                </div>
                <div className="col-sm-6 ">
                  <img className="img-fluid rounded webp" src="img/webpic3.png" height='200px' alt="" />
                </div>
              </div>
    
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
