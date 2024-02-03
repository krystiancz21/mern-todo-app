import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../utils/config";

const useUserRegister = () => {
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });
    const [registerError, setRegisterError] = useState("");  
    const navigate = useNavigate();

    const handleUserInput = ({ currentTarget: inputField }) => {
        setUserData({ ...userData, [inputField.name]: inputField.value });
    };

    const handleUserRegister = async (e) => {
        e.preventDefault()

        try {
            const url = `${API_BASE_URL}/users`;
            const { data: res } = await axios.post(url, userData)
            navigate('/main');
            console.log(res.message)
        } catch (error) {
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                setRegisterError(error.response.data.message)
            }
        }
    };

    return { userData, registerError, handleUserInput, handleUserRegister };
}

export default useUserRegister;
