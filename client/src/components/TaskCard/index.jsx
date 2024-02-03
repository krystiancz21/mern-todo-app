import React from 'react';
import moment from 'moment';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { FaRegTrashAlt } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";

const TaskCard = ({ item, handleUpdate, handleDelete }) => {
    return (
        <Card className="mt-3">
            <Card.Body>
                <Card.Title>
                    <Row className="my-2 align-items-center">
                        <Col>{item.task}</Col>
                        <Col className="col-auto">
                            <Button variant="primary" onClick={() => handleUpdate(item._id)}>
                                <FiEdit2 className="mb-1" />
                            </Button>{' '}
                            <Button variant="danger" onClick={() => handleDelete(item._id)}>
                                <FaRegTrashAlt className="mb-1" />
                            </Button>
                        </Col>
                    </Row>
                </Card.Title>
                <Card.Text>{item.description}</Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted text-center">{moment(item.updatedAt).format('DD.MM.YYYY HH:mm')}</Card.Footer>
        </Card>
    );
}

export default TaskCard;
