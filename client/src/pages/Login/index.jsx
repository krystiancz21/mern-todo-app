import useUserAuth from '../../hooks/useUserAuth'
import { Link } from "react-router-dom"
import styles from "../../styles/global.module.css"
import { Container, Form, FormControl, Button, Row, Col } from 'react-bootstrap';

const Login = () => {
    const { userCredentials, authError, handleUserInput, handleUserAuth } = useUserAuth();

    return (
        <>
            <Container className={`${styles.content} ${styles.margin_login}`}>
                <h2 className="text-center">Welcome in ToDo app 🥳</h2>
                <Form onSubmit={handleUserAuth}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <FormControl
                            type="email"
                            placeholder="Enter email"
                            name="email"
                            onChange={handleUserInput}
                            value={userCredentials.email || ''}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <FormControl
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={handleUserInput}
                            value={userCredentials.password || ''}
                            required
                        />
                    </Form.Group>
                    {authError && <div className="alert alert-danger">{authError}</div>}
                    <Row className="mb-2">
                        <Form.Group as={Col} controlId="formGridButtonLogin">
                            <Button variant="primary" type="submit" className="w-100">
                                Login
                            </Button>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridButtonSignUp">
                            <Link to="/signup" >
                                <Button variant="outline-primary" className="w-100">
                                    Sing up
                                </Button>
                            </Link>
                        </Form.Group>
                    </Row>
                </Form>
            </Container>
        </>
    );
}

export default Login
