import { Routes, Route, NavLink, Link} from 'react-router-dom';
import Home from './Home'
import Contact from './Contact';
import SignUp from './Register';
import Login from './Login';
import Topics from './Topics';

function Header() {
    return ( 
        <div>

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
                        <li className='nav-item'>
                            <NavLink to="Register" className="nav-link">Register</NavLink>
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
            <Route path="Register" element={<SignUp/>} />
            <Route path="Login" element = {<Login/>}/>
            <Route path="SubjectAreas" element= {<Topics/>} />
            <Route path="Contact" element= {<Contact/>} />
            </Routes> 
        </div>
     );
}

export default Header;