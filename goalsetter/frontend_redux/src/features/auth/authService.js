import axios from "axios";
const base_Url = 'http://localhost:3001/api/users'

const registerUser = async (userdata) => {
    try {
        const response = await axios.post(`${base_Url}/register`, userdata);
        if (response.data) {
            localStorage.setItem("user", JSON.stringify(response.data));
            return response.data;
        }
    } catch (error) {
        // Handle any errors here
        console.error(error);
        throw error; // Rethrow the error to handle it in the calling code
    }
}

const logout = () => {
    return localStorage.removeItem("user")
}


const authServiceFunctions = {
    registerUser,
    logout
}

export default authServiceFunctions