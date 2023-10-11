import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { registerUser } from "../features/auth/authslice";
import { useNavigate } from "react-router-dom";
const Register = () => {

    const [formfields, setformfields] = useState({
        name: "", email: "", password: ""
    })

    const { name, email, password } = formfields
    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (isSuccess || user) {
            navigate("/add-goals")
        } else {
            console.log(message);
            navigate("/register")
        }


    }, [isSuccess])


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isError) {
            console.log(message);
        } else {
            const newuserData = { name, email, password };
            await dispatch(registerUser(newuserData)); // Wait for the async action to complete
            // Handle success or error here based on the updated state
        }
    };
    const handleChange = (e) => {
        e.preventDefault()
        setformfields((prevValue) => ({
            ...prevValue,
            [e.target.name]: e.target.value
        }))
    }


    return (
        <>
            <h1 className="text-center">Register</h1>

            <Form className="col-lg-4 col-md-6 m-auto mt-4 border border-1 border-dark p-5 shadow rounded-4">

                <Form.Group className="">
                    <Form.Label className="fs-3 my-3 fw-semibold">Name</Form.Label>
                    <Form.Control className="shadow-none p-2" placeholder="enter your name here " name="name" value={name} onChange={handleChange} type="text"></Form.Control>
                </Form.Group>
                <Form.Group className="">
                    <Form.Label className="fs-3 my-3 fw-semibold">Email</Form.Label>
                    <Form.Control className="shadow-none p-2" placeholder="enter your email here " name="email" value={email} onChange={handleChange} type="email"></Form.Control>
                </Form.Group>
                <Form.Group className="">
                    <Form.Label className="fs-3 my-3 fw-semibold">Password</Form.Label>
                    <Form.Control className="shadow-none p-2" placeholder="enter your Password here " name="password" value={password} onChange={handleChange} type="Password"></Form.Control>
                </Form.Group>

                <Button onClick={handleSubmit} type="submit" className="mt-4 w-100" variant="primary">Submit</Button>
            </Form>

        </>
    );
};

export default Register;
