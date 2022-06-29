import React, { Component } from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'

export default class Articles extends Component {

  
  render() {
   
    return (
        
     <div>
         <Header/>
       <Navbar/>
       <div className="container">
  <div className="row">
  <div className="col-12">
          <div className="mb-2">
            <h1>Liste des articles</h1>
        <table id="dtBasicExample" className="table table-striped table-bordered" cellSpacing="0" width="100%">
  <thead>
    <tr>
    <th className="th-sm">ID
      </th>
      <th className="th-sm">Titre
      </th>
      <th className="th-sm">Client
      </th>
      <th className="th-sm">Site
      </th>
      <th className="th-sm">Nbr Heure
      </th>
      <th className="th-sm">Urgent
      </th>
      <th className="th-sm">Correcteur
      </th>
      <th className="th-sm">Motif
      </th>
      <th className="th-sm">Action  
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1234</td>
      <td>Tiger Nixon</td>
      <td>System Architect</td>
      <td>Edinburgh</td>
      <td>61</td>
      <td>2011/04/25</td>
      <td>$320,800</td>
      <td> <button className="btn btn-primary text-right text-uppercase"> Motif </button></td>
      <td> <button className="btn btn-primary text-right text-uppercase"> Envoyer mail </button></td>

    </tr>
    <tr>
    <td>3456</td>
      <td>Tiger Nixon</td>
      <td>Accountant</td>
      <td>Tokyo</td>
      <td>63</td>
      <td>2011/07/25</td>
      <td>$170,750</td>
      <td> <button className="btn btn-primary text-right text-uppercase"> Motif </button></td>
      <td> <button className="btn btn-primary text-right text-uppercase"> Envoyer mail </button></td>

    </tr>
    
  </tbody>
  <tfoot>
    <tr>
      <th>Name
      </th>
      <th>Position
      </th>
      <th>Office
      </th>
      <th>Age
      </th>
      <th>Start date
      </th>
      <th>Salary
      </th>
    </tr>
  </tfoot>
</table>
</div>
</div>
</div>
</div>
<Footer/>
        </div>

    )
  }
}
