import { Routes, Route, NavLink, Link} from 'react-router-dom';
import Home from './Home'
import Contact from './Contact';
import SignUp from './Register';
import Login from './Login';
import Topics from './Topics';
import Pymodule from './PyModul';
// import {BsSearch} from "react-icons/bs";
// import {useGlobalContext} from '../context';

function Header() {
    // const {
    //     waiting,
    //     loading,
    //     questions,
    //     index,
    //     correct,
    //     nextQuestions,
    //     checkAnswer,
    // } = useGlobalContext();

    // if (waiting) {
    //     return <Pymodule/>
    // }

    return ( 
        <div>

           {/* navbar */}
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark ">
            <Link className="navbar-brand ms-3 " to="">Testym</Link>
            <div className="container d-flex justify-content-between">
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
                        <li className='main-login nav-item'>
                            <NavLink to="Pymodule" className="nav-link">QuizPageDup</NavLink>
                        </li> 
                        <li className="nav-item">
                            <NavLink to="topics" className='nav-link'>SubjectAreas</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="Contact" className='nav-link'>Contact us</NavLink>
                        </li>
                        

                    </ul>
                </div>
                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="navbarSupportedContent" className="menu collapse navbar-collapse d-flex justify-content-between ">
                    <ul className="navbar-nav">
                        <li className='nav-item active'>
                            <NavLink className="nav-link" to="">Home</NavLink>
                        </li>
                        <li className='main-login nav-item'>
                            <NavLink to="Pymodule" className="nav-link">QuizPageDup</NavLink>
                        </li> 
                        <li className="nav-item">
                            <NavLink to="topics" className='nav-link'>SubjectAreas</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="Contact" className='nav-link'>Contact us</NavLink>
                        </li>

                    </ul>
                    
                    <ul className="navbar-nav me-5 d-flex gap-3 login-regi">
                        
                        <form className=" d-flex">
                            <input className="form-control " type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-light " type="submit"><BsSearch></BsSearch></button>
                        </form>
                        
                        <li className='main-login nav-item'>
                            <NavLink to="Login" className="nav-link">Login</NavLink>
                        </li>
                        <li className='nav-item border'>
                            <NavLink to="Register" className="nav-link">SignUp</NavLink>
                        </li>

                    </ul>
                </div> */}
            </div>
        </nav>


            {/* create routes for components */}
            <Routes>
            <Route path="" element= {<Home/>} />
            <Route path="Register" element={<SignUp/>} />
            <Route path="Login" element = {<Login/>}/>
            <Route path="topics/*" element= {<Topics/>} >
                <Route path="Pymodule" element={<Pymodule/>}/>
            </Route>
            <Route path="Pymodule" element={<Pymodule/>}/>
            <Route path="Contact" element= {<Contact/>} />
            </Routes> 
        </div>
     );
}

export default Header;