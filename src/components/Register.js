import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

let items;

const aquaticCreatures = [
  { label: 'Shark', value: 'Shark' },
  { label: 'Dolphin', value: 'Dolphin' },
  { label: 'Whale', value: 'Whale' },
  { label: 'Octopus', value: 'Octopus' },
  { label: 'Crab', value: 'Crab' },
  { label: 'Lobster', value: 'Lobster' },
];

export default class Register extends Component {

  /*begin  call api list of cuntry */
  


  state = {
    country: []
  } 


  componentDidMount() {
  axios.get(`http://localhost:8000/api/countries`)
    .then(res => {
      const country = res.data;
      this.setState({ country });
      console.log(country);
     let items=country;
      console.log(items);
    })

}


/*end   call api list of cuntry */

 /*begin  of call api Register */
  userData;
    constructor(props) {
      super(props);
      this.state = {
        signupData: {
          name: "",
          email: "",
          username: "",
          password: "",
          prenom: "",
          numtel: "",
          statut: "",
          numrue: "",
          codepostale: "",
          pays: "",
         
          isLoading: "",
        },
        msg: "",
      };

    }

    onChangehandler = (e, key) => {
      const { signupData } = this.state;
      signupData[e.target.name] = e.target.value;
      this.setState({ signupData });
    };
    

    onSubmitHandler = (e) => {
      e.preventDefault();
      this.setState({ isLoading: true });
      axios
        .post("http://localhost:8000/api/users", this.state.signupData)
        .then((response) => {
          this.setState({ isLoading: false });
          if (response.data.status === 200) {
            this.setState({
              msg: response.data.message,
              signupData: {
                name: "",
                email: "",
                username: "",
                password: "",
                prenom: "",
                numtel: "",
                statut: "",
                numrue: "",
                codepostale: "",
                pays: "",
            

              },
            });
            setTimeout(() => {
              this.setState({ msg: "" });
            }, 2000);
          }
  
          if (response.data.status === "failed") {
            this.setState({ msg: response.data.message });
            setTimeout(() => {
              this.setState({ msg: "" });
            }, 2000);
          }
        });
    };



   /*End of  call api Register */


  render() {

    
    const isLoading = this.state.isLoading;
    return (


  <main>
  
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
            <div className="text-center mb-1">
              <img src="https://app.semantlink.com/app-assets/images/logo/logo.png" alt="branding logo"></img>
            </div>
              <h6 className="font-large-1  text-center">S’inscrire</h6>
              <form onSubmit={this.handleSubmit}>
                <label className="form-group has-float-label mb-4">
                  <input className="form-control required " name="name" value={this.state.signupData.name}  onChange={this.onChangehandler}/>
                  <span>Nom: <span className='danger'>*</span></span>
                </label>
                <label className="form-group has-float-label mb-4">
                  <input className="form-control" name="prenom" value={this.state.signupData.prenom}  onChange={this.onChangehandler}/>
                  <span>Prenom:  <span className='danger'>*</span> </span>
                </label>
                <label className="form-group has-float-label mb-4">
                  <input className="form-control" name="numtel" value={this.state.signupData.numtel}  onChange={this.onChangehandler}/>
                  <span>Numéro de téléphone:  <span className='danger'>*</span> </span>
                </label>
                <label className="form-group has-float-label mb-4">
                  <input className="form-control" name="email"  value={this.state.signupData.email}  onChange={this.onChangehandler} />
                  <span>E-mail: <span className='danger'>*</span> </span>
                </label>
                <label className="form-group has-float-label mb-4">
                  <input className="form-control" name="password" type="password"   value={this.state.signupData.password}  onChange={this.onChangehandler}/>
                  <span>Password <span className='danger'>*</span></span>
                </label>
                <h6 className="font-large-1  text-center">Informations de facturation</h6>

                <label className="form-group has-float-label mb-4">
                <select className=" browser-default custom-select custom-select-lg mb-3" id="statut" value={this.state.signupData.statut}  onChange={this.onChangehandler}  name="statut" required="">
                                                    <option value="particulier">Particulier</option>
                                                    <option value="professionnel">Professionnel</option>
                                                </select>
                  <span>Statut : <span className='danger'>*</span> </span>
                </label>

                <label className="form-group has-float-label mb-4">
                  <input className="form-control round" name="numrue" value={this.state.signupData.numrue}   onChange={this.onChangehandler}/>
                  <span>Numéro et nom de rue : <span className='danger'>*</span> </span>
                </label>

                <label className="form-group has-float-label mb-4">
                  <input className="form-control" name="codepostale"  value={this.state.signupData.codepostale}  onChange={this.onChangehandler} />
                  <span>Code postal: <span className='danger'>*</span> </span>
                </label>


                <label className="form-group has-float-label mb-4">
               
                <select className=" browser-default custom-select custom-select-lg mb-3">
                
               {/* {this.items.map(item => {
          return <div key={item.id}>{item.name}</div>;
        })}
               */}
                 
                </select>
                  <span>Pays: <span className='danger'>*</span> </span>
                </label>

                <p className="card-subtitle text-muted text-right font-small-3 mx-2 my-1">
                                        <span>Déjà membre ?
                                        <Link  to="/" className="card-link"> Connexion</Link>
                                        </span>
                                    </p>
               

                <div className="justify-content-end align-items-center form-group text-center">
                <p className="text-white">{this.state.msg}</p>
                  <button className="btn btn-primary btn-lg btn-shadow  btn-block btn-glow btn-bg-gradient-x-purple-blue col-12 mr-1 mb-1" type="submit" onClick={this.onSubmitHandler}>Inscription
                  
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
