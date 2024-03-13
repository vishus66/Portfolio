import React from 'react'

export default function Skills() {

    return (
        <>
            <div className="bg-color py-6 pb-5" id="skill">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <h1 className="display-3 mb-5">Skills & Experience</h1>
                            <h1 className="mb-4">My Skills</h1>
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <div className="skill mb-4">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="font-weight-bold">HTML</h6>
                                            <h6 className="font-weight-bold">95%</h6>
                                        </div>
                                        <div class="progress">
                                            <div class="progress-bar bg-success" role="progressbar" style={{ width: "90%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="skill mb-4">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="font-weight-bold">CSS</h6>
                                            <h6 className="font-weight-bold">85%</h6>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: "85%" }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="skill mb-4">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="font-weight-bold">Javascript</h6>
                                            <h6 className="font-weight-bold">90%</h6>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar bg-danger" role="progressbar" style={{ width: "90%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="skill mb-4">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="font-weight-bold">React JS</h6>
                                            <h6 className="font-weight-bold">90%</h6>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar bg-danger" role="progressbar" style={{ width: "90%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="skill mb-4">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="font-weight-bold">Express JS</h6>
                                            <h6 className="font-weight-bold">95%</h6>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar bg-dark" role="progressbar" style={{ width: "95%" }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="skill mb-4">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="font-weight-bold">Node JS</h6>
                                            <h6 className="font-weight-bold">85%</h6>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar bg-info" role="progressbar" style={{ width: "85%" }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                    <div className="skill mb-4">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="font-weight-bold">MongoDB</h6>
                                            <h6 className="font-weight-bold">90%</h6>
                                        </div>
                                        <div className="progress">
                                            <div className="progress-bar bg-success" role="progressbar" style={{ width: "90%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 p-2 ">
                            <h1 className='mt-2 display-4 mb-5'>Education and Experience</h1>
                            <div className="row">
                                <div className="col mx-5">
                                    <h2 className='m-2 p-2'>Education</h2>
                                    <div className='mt-3 p-2'>
                                        <h4>BTECH - COMPUTER SCIENCE</h4>
                                        <p>GNDEC , LUDHIANA (2019-2023) <span className='d-flex justify-content-between'>CGPA-7.4</span></p>
                                    </div>
                                    <div className='mt-3 p-2'>
                                        <h4>SECONDARY SCHOOL</h4>
                                        <p>KV NO.1 (2018-2019) <span className='d-flex justify-content-between'>PERCENTAGE - 64</span></p>
                                    </div>

                                </div>
                                <div className="col">
                                    <h2>Experience</h2>
                                    <div className='mt-4 p-2'>
                                        <h4>FRONTEND DEVELOPER TRAINEE</h4>
                                        <p>Zeroit Solution, Mohali(Aug/2022 - Jan/2023)</p>
                                    </div>                                    

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
