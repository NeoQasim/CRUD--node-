import axios from "axios";
const base_Url = 'http://locaolhost:3001/api/user'


const registerUser = async (userdata) => {
    const response = axios.post(`${base_Url}`, userdata)
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data))
        return response.data
    }
}


const authServiceFunctions = {
    registerUser
}

export default authServiceFunctions