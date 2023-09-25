import React from 'react';
import { Link } from 'react-router-dom';

const FAQ = () => {

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
              <Link to="/Contact" className="nav-link" target="_blank">
                <i className="fa fa-envelope"></i> Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/FAQ" className="nav-link" target="_blank">
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
        
<h2>Frequently Asked Questions (FAQ)</h2>

<div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="true" aria-controls="flush-collapseOne">
        1. How can I contribute to Wanderlust Worlds?
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        We welcome contributions from fellow travelers and adventurers! If you have a travel story, tips, or recommendations to share, please visit our "Contribute" page to learn how you can become a part of our community.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="true" aria-controls="flush-collapseTwo">
        2. Do you offer travel booking services or tours?
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        No, we do not provide booking services or guided tours. We focus on inspiring and providing resources for independent travelers to plan their own adventures.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="true" aria-controls="flush-collapseThree">
        3. How can I stay updated with Wanderlust Worlds' latest content?
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        You can subscribe to our newsletter to receive regular updates on our latest articles, travel guides, and stories. You can also follow us on social media platforms such as Instagram, Facebook, and Twitter.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="true" aria-controls="flush-collapseFour">
        4. Are the travel recommendations and guides up-to-date?
      </button>
    </h2>
    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        We strive to keep our content as current as possible. However, please note that travel information can change over time. We recommend double-checking details like opening hours, prices, and availability with local sources before your trip.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingFive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="true" aria-controls="flush-collapseFive">
        5. What kind of destinations do you cover?
      </button>
    </h2>
    <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        We specialize in uncovering unique and off-the-beaten-path destinations. Our goal is to showcase hidden gems and diverse cultures from around the world. You'll find a wide range of destinations, from remote villages to bustling cities.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingSix">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="true" aria-controls="flush-collapseSix">
        6. How do you ensure the authenticity of your content?
      </button>
    </h2>
    <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        We believe in experiencing the places we write about firsthand. Our team visits and explores the destinations we feature, engages with local cultures, and shares our honest impressions to provide authentic travel experiences and recommendations.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingSeven">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="true" aria-controls="flush-collapseSeven">
        7. How can I connect with other travelers in the Wanderlust Worlds community?
      </button>
    </h2>
    <div id="flush-collapseSeven" class="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        You can join our vibrant community of travelers by participating in our forums, commenting on articles, and sharing your own travel experiences. Connect with like-minded adventurers, ask questions, and discover new perspectives on travel.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingEight">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="true" aria-controls="flush-collapseEight">
        8. What is Wanderlust Worlds' commitment to sustainability?
      </button>
    </h2>
    <div id="flush-collapseEight" class="accordion-collapse collapse" aria-labelledby="flush-headingEight" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        We are committed to responsible travel and minimizing our environmental impact. We promote eco-friendly practices, such as reducing plastic waste and supporting initiatives that protect our planet's natural wonders.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingNine">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="true" aria-controls="flush-collapseNine">
        9. Is Wanderlust Worlds suitable for all ages and travel styles?
      </button>
    </h2>
    <div id="flush-collapseNine" class="accordion-collapse collapse" aria-labelledby="flush-headingNine" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        Absolutely! Wanderlust Worlds is for everyone, regardless of age, background, or travel style. We celebrate diversity and aim to make travel accessible to all. Whether you're a solo traveler, a family, or a group of friends, you'll find valuable resources and inspiration here.
      </div>
    </div>
  </div>
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
    
    export default FAQ;
    