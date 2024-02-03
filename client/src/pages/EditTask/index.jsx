import { Container } from 'react-bootstrap';
import NavbarComponent from '../../components/NavbarComponent';
import FromTaskComponent from "../../components/FromTaskComponent";
import useLogout from "../../hooks/useLogout";
import useEditTask from "../../hooks/useEditTask";
import styles from "../../styles/global.module.css";

const EditTask = () => {
    const { item, handleNewItem, taskError, handleUpdate } = useEditTask();
    const { handleLogout } = useLogout();

    return (
        <>
            <NavbarComponent handleLogout={handleLogout} />
            <Container className={`mt-5 ${styles.content}`}>
                <h2 className='text-center'>Edit Task</h2>
                <FromTaskComponent 
                    item={item}
                    handleItemChange={handleNewItem}
                    handleSubmit={handleUpdate}
                    taskError={taskError}
                />
            </Container>
        </>
    );
};

export default EditTask;