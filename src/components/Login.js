
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Login extends Component {
  render() {
     
    return (
      <div>
       
        <main>

            <div className="row h-100">
                <div className="col-12 col-md-6 mx-auto my-auto">
                <div className="card auth-card">
                    {/* <div className="position-relative image-side ">
                        <p className=" text-white h2">MAGIC IS IN THE DETAILS</p>
                        <p className="white mb-0">
                            Please use your credentials to login.
                            <br />If you are not a member, please
                            <Link  to="/register" className="white"> Register</Link>
                        </p>
                    </div> */}
                    <div className="form-side col-12">
                    <div class="text-center mb-1">
              <img src="https://app.semantlink.com/app-assets/images/logo/logo.png" alt="branding logo"></img>
            </div>
                    <h6 className="mb-4">Login</h6>
                    <form>
                        <label className="form-group has-float-label mb-4">
                        <input className="form-control" />
                        <span>Email : <span className='danger'>*</span></span>
                        </label>
                        <label className="form-group has-float-label mb-4">
                        <input className="form-control" type="password" placeholder />
                        <span>Mot de passe :  <span className='danger'>*</span></span>
                        </label>
                        <div class="form-group row">
                                                <div class="col-md-6 col-12 text-center text-sm-left">

                                                </div>
                                                <div class="col-md-6 col-12 float-sm-left text-center text-sm-right"><a href="/recover-password" class="card-link">Mot de passe oublié?</a></div>
                                            </div>
                        <div className="d-flex justify-content-between align-items-center">
                       
                        <button className="btn btn-primary btn-lg btn-shadow btn round btn-block btn-glow btn-bg-gradient-x-purple-blue col-12 mr-1 mb-1" type="submit">Connexion</button>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            
        </main>
    </div>
  

    )
  }
}
