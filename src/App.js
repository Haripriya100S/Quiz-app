import React from 'react';
import { Routes, Route, NavLink, Link} from 'react-router-dom';
import './App.css';
import Home from './components/Home'
// import Topics from './components/Topics';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import Topics from './components/Topics';



function App() {
  return (
    <div className='App'>
      <div className='content-wrap'>
        {/* navbar */}
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark d-flex justify-content-between">
          <Link className="navbar-brand ms-3 " to="">Testym</Link>
          <div className="container-fluid">
              <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div id="menu" className="collapse navbar-collapse ">
                  <ul className="navbar-nav mx-auto">
                      <li>
                        {/* className= "nav-item" */}
                        <NavLink className="nav-link" to="">Home</NavLink>
                      </li>
                      <li className='main-login nav-item'>
                        <NavLink to="Login" className="nav-link">Login</NavLink>
                      </li>
                      <li className="nav-item">
                          <NavLink to="SubjectAreas" className='nav-link'>SubjectAreas</NavLink>
                      </li>
                      <li className="nav-item">
                          <NavLink to="Contact" className='nav-link'>Contact us</NavLink>
                      </li>
                      

                  </ul>
              </div>
          </div>
      </nav>


        {/* create routes for compinents */}
        <Routes>
          <Route path="" element= {<Home/>} />
          <Route path="Login" element = {<Login/>}/>
          <Route path="SubjectAreas" element= {<Topics/>} />
          <Route path="Contact" element= {<Contact/>} />
        </Routes>
      </div>
      

      <Footer/>
    </div>
  );
}

export default App;
