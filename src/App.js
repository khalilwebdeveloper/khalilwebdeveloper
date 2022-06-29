
import './App.css';
import Dashboard from './components/Dashboard';
import Router from './Router';
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div className=''>
      
      <Dashboard/>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
     
    </div>
  );
}

export default App;
