import { Container } from 'react-bootstrap';
import NavbarComponent from '../../components/NavbarComponent';
import useNewTask from "../../hooks/useNewTask";
import FromTaskComponent from "../../components/FromTaskComponent";
import useLogout from "../../hooks/useLogout";
import styles from "../../styles/global.module.css";

const AddNewPortfolio = () => {
    const { item, handleNewItem, taskError, handleNewTask } = useNewTask();
    const { handleLogout } = useLogout();

    return (
        <>
            <NavbarComponent handleLogout={handleLogout} />
            <Container className={`mt-5 ${styles.content}`}>
                <h2 className="text-center">New Task</h2>
                <FromTaskComponent 
                    item={item}
                    handleItemChange={handleNewItem}
                    handleSubmit={handleNewTask}
                    taskError={taskError}
                />
            </Container>
        </>
    )
}

export default AddNewPortfolio
