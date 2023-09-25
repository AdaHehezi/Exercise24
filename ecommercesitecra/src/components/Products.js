import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {

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
        
        <div id="Products" class="container-fluid">
        <div class="container">
            <div class="row gy-4 justify-content-center">
              <div class="col-md-3 col-sm-6 mb-4">
                <div class="p-1 border"><img src="./images/shutterstock-1.png" alt="image1" class="img-fluid"/></div>
              </div>
              <div class="col-md-3 col-sm-6 mb-4">
                <div class="p-1 border"><img src="./images/shutterstock-2.png" alt="image2" class="img-fluid"/></div>
              </div>
              <div class="col-md-3 col-sm-6 mb-4">
                <div class="p-1 border"><img src="./images/shutterstock-3.png" alt="image3" class="img-fluid"/></div>
              </div>
            </div>
        </div>
    
        <div class="container">
            <div class="row gy-4 justify-content-center">
              <div class="col-md-3 col-sm-6 mb-4">
                <div class="p-1 border"><img src="./images/shutterstock-4.png" alt="image1" class="img-fluid"/></div>
              </div>
              <div class="col-md-3 col-sm-6 mb-4">
                <div class="p-1 border"><img src="./images/shutterstock-5.png" alt="image2" class="img-fluid"/></div>
              </div>
              <div class="col-md-3 col-sm-6 mb-4">
                <div class="p-1 border"><img src="./images/shutterstock-6.png" alt="image3" class="img-fluid"/></div>
              </div>
            </div>
        </div>
    
        <div class="container">
              <div class="row gy-4 justify-content-center">
                <div class="col-md-3 col-sm-6 mb-4">
                  <div class="p-1 border"><img src="./images/shutterstock-7.png" alt="image7" class="img-fluid"/></div>
                </div>
                <div class="col-md-3 col-sm-6 mb-4">
                  <div class="p-1 border"><img src="./images/shutterstock-8.png" alt="image8" class="img-fluid"/></div>
                </div>
                <div class="col-md-3 col-sm-6 mb-4">
                  <div class="p-1 border"><img src="./images/shutterstock-9.png" alt="image9" class="img-fluid"/></div>
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
    
    export default Products;
    