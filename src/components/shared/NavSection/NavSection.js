import React from 'react';
import { Container,  Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import './NavSection.css';
import useAuth from '../../../Hooks/useAuth';



const NavSection = () => {
    const {user, logOut } = useAuth();
    const history = useHistory();

    const handleLogout = () => {
        logOut();
    }

    return (
        <Navbar  expand="lg" className="customNav p-0">
            <Container className="position-relative">


                <Navbar.Brand className="py-2 brandName" >
                    <Link to="/">Custard Cake</Link>
                </Navbar.Brand>
                <div className="d-flex align-items-center">
                    <NavDropdown title={<div className="pro-img">
                        {user.photoURL ? <img src={user.photoURL} alt="" /> : ''}</div>} id="basic-nav-dropdown">
                        
                        {user.email ? <>
                            <NavDropdown.Item> <span className="text-center" onClick={() => (history.push('/dashboard'))} > Dashboadrd</span></NavDropdown.Item>
                            <NavDropdown.Item > <span className="text-center">{user.displayName}</span></NavDropdown.Item>
                            <NavDropdown.Item > <span className="text-center" onClick={handleLogout} >Log Out</span></NavDropdown.Item>
                        </>
                            :
                            <>
                                <NavDropdown.Item onClick={() => (history.push('/login'))} > <span className="text-center" >Log in</span></NavDropdown.Item>
                                <NavDropdown.Item> <span onClick={() => (history.push('/registration'))} className="text-center" > Registration</span></NavDropdown.Item>
                            </>
                        }
                    </NavDropdown>
                    <div>
                        <Navbar.Toggle aria-controls="navbarScroll" className="end-0 navToggle " />

                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="navItemContainer "
                                navbarScroll
                            >

                                <li className="navItem"><Link to="/home">Home</Link></li>
                                <li className="navItem"><Link to="/items">Items</Link></li>
                                <li className="navItem"><Link to="/reviews">Reviews</Link></li>

                            </Nav>

                        </Navbar.Collapse>
                    </div>
                </div>

            </Container>
        </Navbar>
    );
};

export default NavSection;