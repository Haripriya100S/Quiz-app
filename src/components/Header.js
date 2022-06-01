import { Routes, Route, NavLink, Link} from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Home from './Home'
import Contact from './Contact';
import SignUp from './Register';
import Login from './Login';
import Topics from './Topics';
import Pymodule from './PyModul';
import { clearLoginStatus } from "./../slices/userSlice";
import UserDashBoard from './userDashBoard/userDashBoard';
import {useNavigate, Navigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
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

    let { userObj, isError, isLoading, isSuccess, errMsg } = useSelector(
        (state) => state.user
    );
    //get dispathc function
    let dispath = useDispatch();

    //get navigate function
    let navigate = useNavigate();

    //logout user
    const userLogout = () => {
    localStorage.clear();
    dispath(clearLoginStatus());
    navigate("/Login");
    };

    return ( 
        <div>

           {/* navbar */}
            {/* <nav className="navbar navbar-expand-sm navbar-dark bg-dark ">
            <Link className="navbar-brand ms-3 " to="">Testym</Link>
            <div className="container d-flex justify-content-between">
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="menu" className="collapse navbar-collapse ">
                    <ul className="navbar-nav mx-auto">
                        <li>
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
                
            </div>
        </nav> */}
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="">Testym</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {isSuccess !== true ? (
                <>
                  {/* These links can be visible when no user logged in */}
                  <Nav.Item>
                    <Nav.Link eventKey="1" as={NavLink} to="">
                      Home
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey="2" as={NavLink} to="Register">
                      Signup
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey="3" as={NavLink} to="Login">
                      Login
                    </Nav.Link>
                  </Nav.Item>


                  <Nav.Item>
                    <Nav.Link eventKey="3" as={NavLink} to="topics">
                      SubjectAreas
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey="3" as={NavLink} to="Pymodule">
                      QuizPageDup
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey="4" as={NavLink} to="Contact">
                      ContactUs
                    </Nav.Link>
                  </Nav.Item>
                </>
              ) : (
                <>
                  <NavDropdown
                    title={userObj.username}
                    id="collasible-nav-dropdown"
                  >
                    <NavDropdown.Item>Change password</NavDropdown.Item>

                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={userLogout}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

        


            {/* create routes for components */}
            <Routes>
            <Route path="" element= {<Home/>} />
            <Route path="Register" element={<SignUp/>} />
            <Route path="Login" element = {<Login/>}/>
            <Route path="userDashBoard" element = {<UserDashBoard/>} />
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