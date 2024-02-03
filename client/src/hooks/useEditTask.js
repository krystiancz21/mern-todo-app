import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios";
import { API_BASE_URL } from "../utils/config";

const useEditTask = () => {
    const [item, setItem] = useState({
        task: "",
        description: "",
        priority: false,
        isDone: false,
    })
    const { id } = useParams();
    const navigate = useNavigate();
    const [taskError, setTaskError] = useState("")
    
    useEffect(() => {
        getUserById();
    }, []);

    const getUserById = async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/tasks/${id}`);
            if (response.data) {
                setItem({
                    task: response.data.task,
                    description: response.data.description,
                    priority: response.data.priority || false,
                    isDone: response.data.isDone,
                });
            }
        } catch (error) {
            setTaskError(error);
            console.error(error);
        }
    };

    const handleNewItem = ({ currentTarget: input }) => {
        const value = input.type === 'checkbox' ? input.checked : input.value;
        setItem({ ...item, [input.name]: value })
    }

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`${API_BASE_URL}/tasks/${id}`, item);
            navigate("/main");
        } catch (error) {
            setTaskError(error);
            console.log(error);
        }
    };

    return { item, handleNewItem, taskError, handleUpdate };
}

export default useEditTask;
