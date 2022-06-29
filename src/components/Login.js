
import React, { Component } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router';

export default class Login extends Component {

  

  constructor(props) {
   
    super(props);
    this.state = {
      email: "",
      password: "",
      msg: "",
      isLoading: false,
      redirect: false,
      errMsgEmail: "",
      errMsgPwd: "",
      errMsg: "",
    };
  }


  onChangehandler = (e) => {
   
    let name = e.target.name;
    let value = e.target.value;
    let data = {};
    data[name] = value;
    this.setState(data);
  };


  onSignInHandler = () => {
    console.log("response 200 true");
    let email="";
    this.setState({ isLoading: true });
    axios
      .post("http://localhost:8000/api/login", {
        email: this.state.email,
        password: this.state.password,
        
      })
   
      .then((response) => {
        console.log(response.data.token);
        this.setState({ isLoading: false });
        if (response.data.token) {
          console.log("response 200 after login");
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("userData", JSON.stringify(response.data.data));
          this.setState({
            msg: response.data.message,
            redirect: true,
          });  
          
         
        }
        if (
          response.data.status === "failed" 
        ) {
          console.log("ddddssss");
          this.setState({
            errMsgEmail: response.data.validation_error.email,
            errMsgPwd: response.data.validation_error.password,
          });
          setTimeout(() => {
            this.setState({ errMsgEmail: "", errMsgPwd: "" });
          }, 2000);
        } else if (
          response.data.status === "failed" &&
          response.data.success === false
        ) {
          this.setState({
            errMsg: response.data.message,
          });
          setTimeout(() => {
            this.setState({ errMsg: "" });
          }, 2000);
        }
      })
      .catch((error) => {
        console.log(error);
      });

     
  };



  render() {

     if (this.state.redirect  ) {
      window.location.href = "http://localhost:3000/articles";

       //return <redirect to="/articles" />;
     }

     const login = localStorage.getItem("isLoggedIn");
     if (login) {
      window.location.href = "http://localhost:3000/articles";
     }
     const isLoading = this.state.isLoading;
     
    return (
      <div>
       
        <main>

            <div className="row h-100">
                <div className="col-12 col-md-6 mx-auto my-auto">
                <div className="card auth-card">
                    
                    <div className="form-side col-12">
                    <div className="text-center mb-1">
              <img src="https://app.semantlink.com/app-assets/images/logo/logo.png" alt="branding logo"></img>
            </div>
                    <h6 className="mb-4">Login</h6>
                    <form>
                        <label className="form-group has-float-label mb-4">
                        <input className="form-control" type="email" required name="email" value={this.state.email}  onChange={this.onChangehandler}/>
                        <span>Email : <span className='danger'  >*</span></span>
                      
                        </label>
                        
                        <span className="text-danger">{this.state.msg}</span>
                        <span className="text-danger">{this.state.errMsgEmail}</span>
                        <label className="form-group has-float-label mb-4">
                        <input className="form-control" required name="password"  type="password" value={this.state.password}  onChange={this.onChangehandler}/>
                        <span>Mot de passe :  <span className='danger'>*</span></span>
                       
                        
                         </label>
                         <span className="text-danger">{this.state.errMsgPwd}</span>
                        <div className="form-group row">
                            <div className="col-md-6 col-12 text-center text-sm-left">

                            </div>
                            <div className="col-md-6 col-12 float-sm-left text-center text-sm-right"><a href="/recover-password" className="card-link">Mot de passe oublié?</a></div>
                            <span className="text-danger">{this.state.errMsgPwd}</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                        <p className="text-danger">{this.state.errMsg}</p>
                        <button className="btn btn-primary btn-lg btn-shadow  btn-block btn-glow btn-bg-gradient-x-purple-blue col-12 mr-1 mb-1"  type="button" color="success"   onClick={this.onSignInHandler}>Connexion
                        
                        {isLoading ? (
              <span
                className="spinner-border spinner-border-sm ml-5"
                role="status"
                aria-hidden="true"
              ></span>
            ) : (
              <span></span>
            )}
                        </button>
                        </div>

                        <span className="text-danger">{this.state.errMsgPwd}</span>
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
