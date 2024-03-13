import React from 'react'

export default function Projects() {
  return (
    <>
         <div class="bg-color py-6 pt-5" id="project">
        <div class="container">
            <div class="row g-5 mb-5 align-items-center wow fadeInUp" data-wow-delay="0.1s">
                <div class="col-lg-6">
                    <h1 class="display-2 mb-0">My Projects</h1>
                </div>

            </div>
            <div class="row g-4 portfolio-container wow fadeInUp" data-wow-delay="0.1s">
                <div class="col-lg-4 col-md-6 portfolio-item first">
                    <div class="portfolio-img rounded overflow-hidden">
                        <img class="img-fluid" src="img/webpic.png" alt=""/>
                        <h4 className='text-center p-2'>Ecommerce Web site</h4>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 portfolio-item second">
                    <div class="portfolio-img rounded overflow-hidden">
                        <img class="img-fluid" src="img/webpec2.png" alt=""/>
                        <h4>Employe Data Entery</h4>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 portfolio-item first">
                    <div class="portfolio-img rounded overflow-hidden">
                        <img class="img-fluid" src="img/webpic3.png" alt=""/>
                        <h4>Data Base Testing</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
      
    </>
  )
}
