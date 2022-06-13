
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard';
import Router from './Router';
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div>
      
      <Dashboard/>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
     
    </div>
  );
}

export default App;
