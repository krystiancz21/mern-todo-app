import React from 'react';
import { Form, Button, FormControl, Row } from 'react-bootstrap';

const FromTaskComponent = ({ item, handleItemChange, handleSubmit, taskError }) => {
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-2">
                <Form.Label>Task</Form.Label>
                <FormControl
                    type="Task"
                    placeholder="Enter new task"
                    name="task"
                    onChange={handleItemChange}
                    value={item.task || ''}
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    as="textarea"
                    placeholder="Enter task description..."
                    name="description"
                    rows={3}
                    onChange={handleItemChange}
                    value={item.description}
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Check
                    type="checkbox"
                    name="priority"
                    label="Important task"
                    onChange={handleItemChange}
                    checked={item.priority}
                />
            </Form.Group>
            {taskError && <div className="alert alert-danger">{taskError}</div>}
            <Row>
                <Form.Group>
                    <Button variant="primary" type="submit">
                        Add task!
                    </Button>
                </Form.Group>
            </Row>
        </Form>
    );
}

export default FromTaskComponent;
