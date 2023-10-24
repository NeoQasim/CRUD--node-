import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import "../pages/styles.css"
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../features/auth/authslice";
import { useEffect } from "react";
// import NavDropdown from "react-bootstrap/NavDropdown";

function Headers() {
    const { user, isSuccess } = useSelector((state) => state.auth)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        if (isSuccess) {
            navigate("/show")
        }
    }, [navigate, dispatch, isSuccess])

    const handleLogout = () => {
        dispatch(logoutUser())

    }
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
                            <Nav.Link className=" link">
                                <Link to="/register"><h1>Regsiter</h1></Link>
                            </Nav.Link>

                            {user &&
                                <>
                                    <Nav.Link className=" link">
                                        <Link to=""><h1>{user.name}</h1></Link>
                                    </Nav.Link>
                                    <Nav.Link className=" ">
                                        <Link onClick={handleLogout} className="link btn btn-danger" to=""><h4>Logout</h4></Link>
                                    </Nav.Link>
                                </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </>
    );
}

export default Headers;
