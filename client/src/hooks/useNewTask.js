import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../utils/config";

const useNewTask = () => {
    const [item, setItem] = useState({
        task: "",
        description: "",
        priority: false,
        isDone: false,
    })
    const [taskError, setTaskError] = useState("")
    const navigate = useNavigate();
    
    const handleNewItem = ({ currentTarget: input }) => {
        const value = input.type === 'checkbox' ? input.checked : input.value;
        setItem({ ...item, [input.name]: value })
    }

    const handleNewTask = async (e) => {
        e.preventDefault()

        try {
            const url = `${API_BASE_URL}/tasks/`
            const { item: res } = await axios.post(url, item)

            navigate('/main')  //Przekierowanie do Main

            console.log(res.message)
        } catch (error) {
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                setTaskError(error.response.data.message)
            }
        }
    }

    return { item, handleNewItem, taskError, handleNewTask };
}

export default useNewTask;
