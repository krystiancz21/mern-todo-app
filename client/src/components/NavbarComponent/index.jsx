import React from 'react';
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';
import { MdTaskAlt } from 'react-icons/md';

const NavbarComponent = ({ handleLogout }) => {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="/main"><MdTaskAlt /> ToDoApp</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/new-task">New Task</Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <Button variant="outline-primary" onClick={handleLogout}>
                        Logout
                    </Button>
                </Form>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;
