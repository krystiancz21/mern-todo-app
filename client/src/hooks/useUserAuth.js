import { useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { API_BASE_URL } from "../utils/config";

const useUserAuth = () => {
    const [userCredentials, setUserCredentials] = useState({ 
        email: "", 
        password: "" 
    });
    const navigate = useNavigate();
    const [authError, setAuthError] = useState("");   

    const handleUserInput = ({ currentTarget: inputField }) => {
        setUserCredentials({ ...userCredentials, [inputField.name]: inputField.value });
    };

    const handleUserAuth = async (e) => {
        e.preventDefault();
        try {
            const authUrl = `${API_BASE_URL}/auth`;
            const { data: jwtToken } = await axios.post(authUrl, userCredentials);
            localStorage.setItem("token", jwtToken.data)
            navigate('/main')
        } catch (error) {
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                setAuthError(error.response.data.message)
            }
        }
    };

    return { userCredentials, authError, handleUserInput, handleUserAuth };
}

export default useUserAuth;
