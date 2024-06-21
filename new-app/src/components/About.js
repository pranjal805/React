import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const About = () => {
  return (
    <div
    className="cd"
    style={{
      position: 'absolute',
      top: '45%',
      left: '35%',
      transform: 'translate(-50%, -50%)'
    }}
  >
  <div className='col-md-10'>
    <div>
      <section className="">
      <h3>
        Discover why
                      <span className="text-primary fw-semibold">[Agency Name]</span>
                      is the best choice for SEO.
      </h3>
      <div className="cont">
        <div className="row">  
              <div className="">
                  <div className="col-lg-20">
                    <div>
                        <h3 className="fs-4">Expertise</h3>
                        <p className="mb-0">Our team of SEO specialists has years of experience and a deep understanding of search engine algorithms and trends.</p>
                        <br></br>
                    </div>
                  </div>
                  <div className="col-lg-20">
                    <div>
                        <h3 className="fs-4">Proven Results</h3>
                        <p className="mb-0">Our data-driven approach ensures measurable results and continuous improvement.</p>
                        <br></br>
                    </div>
                  </div>
              </div>
              <div className="row">
                  <div className="col-4 border-end">
                    <div className="ps-md-4">
                        <h3 className="fs-5">Digital Experts</h3>
                        <span className="fs-2 fw-bold text-primary">50+</span>
                    </div>
                  </div>

                  <div className="col-4 border-end">
                    <div className="ps-md-4">
                        <h3 className="fs-5">Reviews</h3>
                        <span className="fs-2 fw-bold text-primary">100+</span>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="ps-md-4">
                        <h3 className="fs-5">Track record</h3>
                        <span className="fs-2 fw-bold text-primary">10-Year</span>
                    </div>
                  </div>
              </div>
        </div>
      </div>
      </section>
    </div>
  </div>
</div>
)}
export default About;
