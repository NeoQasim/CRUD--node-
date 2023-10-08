import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../pages/styles.css"
// import NavDropdown from "react-bootstrap/NavDropdown";

function Headers() {
    return (
        <>
            <Navbar expand="lg" className="bg-info">
                <Container className="">
                    <Navbar.Brand className="fs-2 fw-bold" >
                        GS
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto fs-5">
                            <Nav.Link className="fs-6">
                                <Link to="/add-goals"><h1>Add Goals</h1></Link>
                            </Nav.Link>
                            <Nav.Link className=" link">
                                <Link to="/show"><h1>Show</h1></Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </>
    );
}

export default Headers;
