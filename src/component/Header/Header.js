
import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../Hooks/useAuth';



const Header = () => {
    const { users, logOut } = useAuth();
    return (

        <>

            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand >Traveller</Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} className="text-white" to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} className="text-white" to="/service">Services</Nav.Link>

                        {
                            users.email && <Nav.Link as={HashLink} style={{ color: "white" }} to="/myorders">My orders</Nav.Link>
                        }
                        {
                            users.email && <Nav.Link as={HashLink} style={{ color: "white" }} to="/manageorders">Manage orders</Nav.Link>
                        }
                        {
                            users.email ?
                                < Button onClick={logOut} variant="dark" >Logout</Button>
                                :
                                <Nav.Link as={HashLink} className="text-white" to="/login">Login</Nav.Link>
                        }


                        <Navbar.Text>
                            {/* Signed in as: <a href="#login" className="text-white">{users?.displayName}</a> */}

                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>


    );
};

export default Header;