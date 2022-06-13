import React, { Component, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'



export default class Register
 extends Component {

  
state = {
  persons: []
}

  componentDidMount() {
  axios.get(`http://localhost:8000/api/users`)
    .then(res => {
      const persons = res.data;
      this.setState({ persons });
      console.log(res.data)
    })
}

  render() {
    return (


  <main className=''>
       <ul>
  
      </ul>
    <div className="container-fluid">
      <div className="row h-100">
        <div className="col-12 col-md-6 mx-auto my-auto">
          <div className="card auth-card">
            {/* <div className="position-relative image-side ">
              <p className=" text-white h2">MAGIC IS IN THE DETAILS</p>
              <p className="white mb-0">
                Please use this form to register.
                <br />If you are a member, please 
                <Link  to="/" className="white"> Login</Link>
              </p>
            </div> */}
            <div className="form-side col-12">
            <div class="text-center mb-1">
              <img src="https://app.semantlink.com/app-assets/images/logo/logo.png" alt="branding logo"></img>
            </div>
              <h6 className="font-large-1  text-center">S’inscrire</h6>
              <form>
                <label className="form-group has-float-label mb-4">
                  <input className="form-control required " />
                  <span>Nom: <span className='danger'>*</span></span>
                </label>
                <label className="form-group has-float-label mb-4">
                  <input className="form-control" />
                  <span>Prenom:  <span className='danger'>*</span> </span>
                </label>
                <label className="form-group has-float-label mb-4">
                  <input className="form-control" />
                  <span>Numéro de téléphone:  <span className='danger'>*</span> </span>
                </label>
                <label className="form-group has-float-label mb-4">
                  <input className="form-control" />
                  <span>E-mail: <span className='danger'>*</span> </span>
                </label>
                <label className="form-group has-float-label mb-4">
                  <input className="form-control" type="password" placeholder />
                  <span>Password <span className='danger'>*</span></span>
                </label>
                <h6 className="font-large-1  text-center">Informations de facturation</h6>

                <label className="form-group has-float-label mb-4">
                <select className=" browser-default custom-select custom-select-lg mb-3" id="status" name="status" required="">
                                                    <option value="particulier">Particulier</option>
                                                    <option value="professionnel">Professionnel</option>
                                                </select>
                  <span>Statut : <span className='danger'>*</span> </span>
                </label>

                <label className="form-group has-float-label mb-4">
                  <input className="form-control round" />
                  <span>Numéro et nom de rue : <span className='danger'>*</span> </span>
                </label>

                <label className="form-group has-float-label mb-4">
                  <input className="form-control" />
                  <span>Code postal: <span className='danger'>*</span> </span>
                </label>

                <label className="form-group has-float-label mb-4">
                  <input className="form-control" />
                  <span>Ville: <span className='danger'>*</span> </span>
                </label>

                <label className="form-group has-float-label mb-4">
               
                <select class=" browser-default custom-select custom-select-lg mb-3" id="country" name="country" required="">
                                      

                                                </select>
                  <span>Pays: <span className='danger'>*</span> </span>
                </label>

                <p class="card-subtitle text-muted text-right font-small-3 mx-2 my-1">
                                        <span>Déjà membre ?
                                        <Link  to="/" className="card-link"> Connexion</Link>
                                        </span>
                                    </p>
               

                <div className="justify-content-end align-items-center form-group text-center">
                  <button className="btn btn-primary btn-lg btn-shadow  btn-block btn-glow btn-bg-gradient-x-purple-blue col-12 mr-1 mb-1" type="submit">Inscription</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>


    )
  }
}
