import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const AddGoals = () => {
    const { user } = useSelector((state) => state.auth)
    const navigate = useNavigate()
    useEffect(() => {

        if (!user) {
            navigate("/register")

        }
    }, [navigate, user])

    return (

        <div>
            <h1 className='text-center'>Add Goals</h1>
        </div>

    )
}

export default AddGoals