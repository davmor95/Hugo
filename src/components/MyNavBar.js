import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const MyNavBar = (props) => {
    return(
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#home">Something</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/form"><span className="nav-menu-items">Apply</span></Nav.Link>

                </Nav>
            </Navbar>
        </>
    )
}

export default MyNavBar;
