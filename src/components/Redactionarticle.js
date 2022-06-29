import React, { Component } from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'


export default class Redactionarticle extends Component {
  render() {
    return (
      <div>
           <Header/>
      <Navbar/>
        <div className='container'>
            <div className='row'>
                Redactionarticle
            </div>
        </div>
      

      <Footer/>
      </div>
 

    )
  }
}
