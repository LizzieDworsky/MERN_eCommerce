import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/useAuth";

const LoginPage = () => {
    const navigate = useNavigate();
    const { storeToken, isAuthenticated } = useAuth();
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/");
        }
    }, [isAuthenticated]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(credentials);
        try {
            const response = await axios.post(
                "http://localhost:5000/api/auth/login",
                credentials
            );
            if (response.status === 201) {
                setCredentials({ username: "", password: "" });
                const token = response.headers["x-auth-token"];
                if (token) {
                    storeToken(token);
                }
            }
        } catch (error) {
            console.warn(`Login error: ${error}`);
        }
    };

    return (
        <div className="auth-form">
            <h2>Login Form</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>Enter your username:</label>
                <input
                    name="username"
                    type="text"
                    value={credentials.username}
                    onChange={(e) => handleChange(e)}
                />
                <label>Enter your password:</label>
                <input
                    name="password"
                    type="password"
                    value={credentials.password}
                    onChange={(e) => handleChange(e)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
