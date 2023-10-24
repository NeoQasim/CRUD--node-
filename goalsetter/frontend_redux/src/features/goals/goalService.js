import axios from "axios";

const base_Url = 'http://localhost:3001/api/goals'


const addGoals = async (goal, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    const response = await axios.post(base_Url, goal, config)
    return response.data

}


const getGoals = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    const response = await axios.get(base_Url, config)
    return response.data

}

const goalServiceFunctions = {
    addGoals,
    getGoals
}

export default goalServiceFunctions