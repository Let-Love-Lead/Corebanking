import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './style.css';

function Login() {
    const navigate = useNavigate(); // Initialize useNavigate hook

    const onFinish = async (values) => {
        try {
            const response = await fetch('https://earwig-right-stag.ngrok-free.app/users/verify', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: values.username,
                    password: values.password
                })
            });

            if (response.ok) {
                const data = await response.json(); // Get the response data
                const token = data.token; // Extract the token from the response

                // Save the token in localStorage for future API requests
                localStorage.setItem('token', token);

                // Assuming a successful login response
                message.success('Login successful!');
                navigate('/dashboard'); // Redirect to dashboard
            } else {
                throw new Error('Login failed'); // Handle login error
            }
        } catch (error) {
            message.error('Incorrect username or password');
        }
    };

    return (
        <div className="grey-container">
            <div className="white-container">
                <h2>Login</h2>
                <Form
                    name="login"
                    className="login-form"
                    onFinish={onFinish}
                    layout="vertical"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password placeholder="Password" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" style={{ backgroundColor: '#0077B6', borderColor: '#0077B6' }}>
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <div className="green-container">
                <div>
                    <box style={{ backgroundColor: 'white', color: 'black' }}>Large Box</box>
                    <box style={{ backgroundColor: 'white', color: 'black' }}>Small Box</box>
                </div>
            </div>
        </div>
    );
}

export default Login;
