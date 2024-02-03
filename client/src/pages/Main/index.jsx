import React from 'react';
import { Container } from 'react-bootstrap';
import NavbarComponent from '../../components/NavbarComponent';
import useTaskManager from "../../hooks/useTaskManager";
import useLogout from "../../hooks/useLogout";
import TaskCard from '../../components/TaskCard';

const Main = () => {
    const { taskData, handleUpdate, handleDelete } = useTaskManager();
    const { handleLogout } = useLogout();

    return (
        <>
            <NavbarComponent handleLogout={handleLogout} />
            <Container className="w-50">
                {taskData.length > 0 ? (
                    taskData.map((item) =>
                        <TaskCard
                            key={item._id}
                            item={item}
                            handleUpdate={handleUpdate}
                            handleDelete={handleDelete}
                        />
                    )
                ) : (
                    <p className="text-center mt-3">Maybe add new tasks...</p>
                )}
            </Container>
        </>
    );
}

export default Main
