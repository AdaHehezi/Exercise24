import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {

    return(
        <>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <Link to="/" className="navbar-brand float">
          <img className="logo" src="./images/logo Small.jpeg" alt="logo" />
        </Link>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ></button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                <i className="fa fa-home"></i> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/AboutUs" className="nav-link">
                <i className="fa fa-bars"></i> About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Products" className="nav-link">
                <i className="fa fa-info"></i> Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Contact" className="nav-link">
                <i className="fa fa-envelope"></i> Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/FAQ" className="nav-link">
                <i className="fa fa-question"></i> FAQ
              </Link>
            </li>
          </ul>

          <div className="login">
            <a
              className="btn btn-default"
              href="#modalLognForm"
              data-bs-toggle="modal"
              data-bs-target="#modalLoginForm"
            >
              <i className="fa fa-sign-in"></i> Login
            </a>
          </div>
        </div>
      </nav>
        
        <div id="Aboutus" class="container">
        <h2>About Us</h2>
        <p>Welcome to Wanderlust Worlds, your passport to the extraordinary. We are a passionate team of globetrotters, explorers, and adventure enthusiasts, united by our insatiable curiosity for the world and a profound love for travel.</p>
        <h5>Our Mission</h5>
        <p>At Wanderlust Worlds, our mission is simple: to inspire and empower travelers of all kinds to embark on incredible journeys, explore diverse cultures, and create lifelong memories. We believe that travel is not just about seeing new places; it's about experiencing the world with an open heart and an open mind.</p>
        <h5>What We Offer</h5>
        <ul type="disc">
            <li>Inspiration: Our website is a treasure trove of travel inspiration, featuring captivating stories, breathtaking photos, and in-depth guides to help you plan your next adventure.</li>
            <li>Travel Resources: We provide practical travel tips, from packing hacks to budgeting advice, to make your journeys smoother and more enjoyable.</li>
            <li>Community: Join our vibrant community of travelers who share their experiences, tips, and recommendations. Connect with like-minded adventurers and discover new perspectives.</li>
            <li>Unique Destinations: We specialize in uncovering hidden gems and off-the-beaten-path destinations. We believe that some of the most memorable experiences happen in places you've never heard of.</li>
        </ul>
        <h5>Our Commitment</h5>
        <ul type="disc">
            <li>Authenticity: We strive to deliver authentic travel experiences and recommendations. We visit the places we write about, engage with local cultures, and share our honest impressions.</li>
            <li>Sustainability: We are committed to responsible travel and minimizing our environmental impact. We promote eco-friendly practices and support initiatives that protect our planet's natural wonders.</li>
            <li>Inclusivity: Wanderlust Worlds is for everyone, regardless of age, background, or travel style. We celebrate diversity and aim to make travel accessible to all.</li>
        </ul>
        <br/><br/><br/>
          <div>
            <h6>Discover . Explore . Wander</h6>
          </div><br/>
        
        </div>
            
            
            
            <div
                className="modal fade"
                id="modalLoginForm"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="myModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header text-center">
                            <h4 className="modal-title w-100 font-weight-bold">Login</h4>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body mx-3">
                            <div className="md-form mb-5">
                                <i className="fa fa-envelope prefix grey-text"></i>
                                <input
                                    type="email"
                                    id="defaultForm-email"
                                    className="form-control validate" />
                                <label
                                    data-error="wrong"
                                    data-success="right"
                                    htmlFor="defaultForm-email"
                                >
                                    Your email
                                </label>
                            </div>
    
                            <div className="md-form mb-4">
                                <i className="fa fa-lock prefix grey-text"></i>
                                <input
                                    type="password"
                                    id="defaultForm-pass"
                                    className="form-control validate" />
                                <label
                                    data-error="wrong"
                                    data-success="right"
                                    htmlFor="defaultForm-pass"
                                >
                                    Your password
                                </label>
                            </div>
                        </div>
                        <div className="modal-footer d-flex justify-content-center">
                            <button className="btn btn-default">Login</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <footer className="bg-light text-dark p-3">
            <div className="text-center">
                <a className="btn btn-outline-dark btn-social mx-1" href="#!"><i class="fab fa-fw fa-facebook-f"></i></a>
                <a className="btn btn-outline-dark btn-social mx-1" href="#!"><i class="fab fa-fw fa-twitter"></i></a>
                <a className="btn btn-outline-dark btn-social mx-1" href="#!"><i class="fab fa-fw fa-linkedin-in"></i></a>   
            </div>            
            
            <div className="copyright py-4 text-center text-dack">
                <div className="container"><small>Copyright &copy; 2023 Wanderlust Worlds </small></div>
            </div>
            </footer>
         </>
      );
    };
    
    export default AboutUs;
    