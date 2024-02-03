import useUserRegister from '../../hooks/useUserRegister'
import { Link } from "react-router-dom"
import styles from "../../styles/global.module.css"
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const Signup = () => {
    const { userData, registerError, handleUserInput, handleUserRegister } = useUserRegister();

    return (
        <>
            <Container className={`${styles.content} ${styles.margin_signup}`}>
                <h2 className="text-center">Register account</h2>
                <Form onSubmit={handleUserRegister}>
                    <Form.Group className="mb-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            onChange={handleUserInput}
                            value={userData.firstName || ''}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                            onChange={handleUserInput}
                            value={userData.lastName || ''}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Email"
                            name="email"
                            onChange={handleUserInput}
                            value={userData.email || ''}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={handleUserInput}
                            value={userData.password || ''}
                            required
                        />
                    </Form.Group>
                    {registerError && <div className="alert alert-danger">{registerError}</div>}
                    <Row className="mb-2">
                        <Form.Group as={Col}>
                            <Button variant="primary" type="submit"  className="w-100">
                                Sing up
                            </Button>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridButtonLogin">
                            <Link to="/">
                                <Button variant="outline-primary" type="button" className="w-100">
                                    Login
                                </Button>
                            </Link>
                        </Form.Group>
                    </Row>
                </Form>
            </Container>
        </>
    )
}

export default Signup
