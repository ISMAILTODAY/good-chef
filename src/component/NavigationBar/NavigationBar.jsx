import React, { useContext } from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { contextProvider } from '../../ContextProvider/ContextProvider';
import './Navigation.css'

const NavigationBar = () => {
    const { user, handleLogOut } = useContext(contextProvider);

    const logOut = () => {
        handleLogOut()
            .then()
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <Navbar className='position-fixed nav top-0 w-100' bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><span className='band '>G</span>ood  <span className='band'>C</span>hef</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/" className={({ isActive, }) =>
                            isActive ? "active" : ""
                        }>Home</Nav.Link>
                        <Nav.Link href="/blog">Bolg</Nav.Link>
                        {
                            user ? <Button onClick={logOut}>LogOut</Button> : <Link to='/login'><Button>Login</Button></Link>


                        }
                    </Nav>

                </Container>
                {
                    user && <Image className='me-auto rounded-circle img' src={user?.photoURL} title={user?.displayName} ></Image>
                }
                <p>{ }</p>
            </Navbar>

        </div>
    );
};

export default NavigationBar;