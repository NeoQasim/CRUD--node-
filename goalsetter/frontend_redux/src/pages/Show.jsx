import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGoals, reset } from '../features/goals/goalslice'

const Show = () => {
    const { goals, isLoading, isError, isSuccess, message } = useSelector(state => state.goals)
    const dispatch = useDispatch()
    useEffect(() => {
        if (isError) {
            console.log(message);
        } else if (!isLoading && !isSuccess) { // Make sure you don't trigger the request continuously
            dispatch(getGoals());
        }
    }, [dispatch, isError, isLoading, isSuccess, message]);

    return (
        <>
            <h1 className="text-center">Show Goals</h1>
            <div className="row">
                {/* <div className="col-lg-4"> */}
                {goals?.map((goal) => {
                    console.log(goal);
                    return (
                        <>
                            <h6 key={goal._id}>{goal.goal}</h6>
                            <h6 >{goal?.goal}</h6>
                            {/* <h6 >test</h6> */}
                        </>
                    )
                })}
                {/* </div> */}
            </div>
        </>
    )
}

export default Show