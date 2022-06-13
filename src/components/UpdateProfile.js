import React, { Component } from 'react'
import Header from './Header'
import Navbar from './Navbar'

export default class UpdateProfile extends Component {
  render() {
    return (
     
      <div>
        <Header/>
       <Navbar/>
       <main>
        <div className="container-fluid">
          <div className="row h-100">
            <div className="col-12 col-md-12 mx-auto my-auto">
              <div className="card auth-card">
               
                <div className="form-side col-12">
                  
                  <h6 className="font-large-1  text-left mb-4">Editer le profil</h6>

                <form>


                  <div className="row">
                    <div className='col-6'>
                    <label className="form-group has-float-label mb-4">
                      <input className="form-control" />
                      <span>Prenom:  <span className='danger'>*</span> </span>
                    </label>
                    </div>
                    <div className='col-6'>
                    <label className="form-group has-float-label mb-4">
                      <input className="form-control required " />
                      <span>Nom: <span className='danger'>*</span></span>
                    </label>
                    </div>
                    <div className='col-6'>
                    
                    <label className="form-group has-float-label mb-4">
                      <input className="form-control round" />
                      <span>Numéro et nom de rue : <span className='danger'>*</span> </span>
                    </label>
                    </div>

                    <div className='col-6'>
                    <label className="form-group has-float-label mb-4">
                      <input className="form-control" />
                      <span>Code postal: <span className='danger'>*</span> </span>
                    </label>
    
                    </div>



                    <div className='col-6'>
                    <label className="form-group has-float-label mb-4">
                      <input className="form-control" />
                      <span>Ville: <span className='danger'>*</span> </span>
                    </label>
    
                    </div>

                    <div className='col-6'>
                    <label className="form-group has-float-label mb-4">
                      <input className="form-control" />
                      <span>Numéro de téléphone:  <span className='danger'>*</span> </span>
                    </label>
                   </div>

                   <div className='col-6'>
                   <label className="form-group has-float-label mb-4">
                      <input className="form-control" />
                      <span>E-mail: <span className='danger'>*</span> </span>
                    </label>
                   </div>

                    <div className='col-6'>
                      <label className="form-group has-float-label mb-4">
                        <select class=" form-control  required round" id="country" name="country" required="">
                                                            <option value="France" selected="selected">France </option>
        
                                                            </select>
                          <span>Pays: <span className='danger'>*</span> </span>
                      </label>
                    </div>  
                    <div className='col-6'>
                      <label className="form-group has-float-label mb-4">
                        <select className=" form-control required round" id="status" name="status" required="">
                                                            <option value="particulier">Particulier</option>
                                                            <option value="professionnel">Professionnel</option>
                                                        </select>
                          <span>Statut : <span className='danger'>*</span> </span>
                      </label>
                    </div>
                   <div className='col-6'>
                    <label className="form-group has-float-label mb-4">
                      <input className="form-control" />
                      <span>Raison sociale : <span className='danger'>*</span> </span>
                    </label>
                    </div>
                    <div className='col-6'>
                      <label className="form-group has-float-label mb-4">
                        <input className="form-control" />
                        <span>Numéro siret : <span className='danger'>*</span> </span>
                      </label>
                    </div>
                    <div className='col-6'>
                      <label className="form-group has-float-label mb-4">
                        <input className="form-control" />
                        <span>Numéro TVA : <span className='danger'>*</span> </span>
                      </label>
                    </div>
                    <div className='col-12'>
                      <div className="justify-content-end align-items-center form-group text-center">
                        <button className="btn btn-primary btn-lg btn-shadow  btn-block btn-glow btn-bg-gradient-x-purple-blue col-12 mr-1 mb-1" type="submit">Mettre à jour</button>
                      </div>
                    </div>
                  </div>

                      <div className='row mb-4'>  
                        <div className='col-12'>
                          <h6 className="font-large-1  text-left">Changer mon mot de passe</h6>
                        </div>
                      </div>
                      <div className='row'>  
                        
                        <div className='col-6'>
                          <label className="form-group has-float-label mb-4">
                            <input className="form-control" type="password" placeholder />
                            <span>Ancien mot de passe :  <span className='danger'>*</span></span>
                          </label>
                        </div>
                        <div className='col-6'>
                          <label className="form-group has-float-label mb-4">
                            <input className="form-control" type="password" placeholder />
                            <span>Nouveau mot de passe : <span className='danger'>*</span></span>
                          </label>
                        </div>
                      </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        </main>
      </div>
    
    )
  }
}
