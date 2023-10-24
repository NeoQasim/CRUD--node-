import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'
import { addGoals } from '../features/goals/goalslice'

const AddGoals = () => {

    const [goal, setgoal] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.auth)
    const { isloading, isSuccess, isError, message, goals } = useSelector(state => state.goals)
    useEffect(() => {

        if (!user) {
            navigate("/register")

        }
    }, [navigate, user])

    const handleClick = (e) => {
        e.preventDefault()
        if (isError) {
            console.log(message);
        } else {
            dispatch(addGoals({ goal }))
        }
    }
    if (isloading) {
        return <h1>loading ... </h1>
    }

    return (

        <>
            <Form className='col-md-5 mt-5 mx-auto shadow p-5 rounded'>
                {/* <h1 className='text-center'>Add Goals</h1> */}
                <Form.Group>
                    <Form.Label className='fs-3'>Add Your Goals</Form.Label>
                    <Form.Control onChange={(e) => setgoal(e.target.value)} className='my-2 shadow-none py-2' placeholder="enter text here ...  " ></Form.Control>
                </Form.Group>
                <Button onClick={handleClick} className='w-100 my-2'>Add Goals</Button>
            </Form>
        </>

    )
}

export default AddGoals