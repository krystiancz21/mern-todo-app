import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../utils/config";

const useTaskManager = () => {
    const [taskData, setTaskData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${API_BASE_URL}/tasks/`)
            .then(res => setTaskData(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleUpdate = (id) => {
        navigate(`/edit-task/${id}`);
    };

    const handleDelete = (id) => {
        axios.delete(`${API_BASE_URL}/tasks/${id}`)
            .then(() => {
                setTaskData(prev => prev.filter(item => item._id !== id));
            })
            .catch(error => console.log(error));
    };

    return { taskData, handleUpdate, handleDelete };
};

export default useTaskManager;
