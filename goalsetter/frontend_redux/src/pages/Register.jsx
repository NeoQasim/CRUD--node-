import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { registerUser } from "../features/auth/authslice";

const Register = () => {

    const [formfields, setformfields] = useState({
        name: "", email: "", password: ""
    })

    const { name, email, password } = formfields

    // eslint-disable-next-line no-use-before-define
    // get the states from redux
    const dispatch = useDispatch()
    const { user, isLoading, isError, isSuccess, message } = useSelector(state => state.auth)
    const handleSubmit = (e) => {
        e.preventDefault()
        if (isError) {
            console.log(message);
        }
        else {
            const newuserData = { name, email, password }

            dispatch(registerUser(newuserData))
        }
    }
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
