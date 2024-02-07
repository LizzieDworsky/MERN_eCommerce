import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/useAuth";

const RegisterPage = () => {
    const navigate = useNavigate();
    const { storeToken, isAuthenticated } = useAuth();
    const [credentials, setCredentials] = useState({
        username: "",
        email: "",
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
                "http://localhost:5000/api/auth/register",
                credentials
            );
            if (response.status === 201) {
                setCredentials({ username: "", email: "", password: "" });
                const token = response.headers["x-auth-token"];
                if (token) {
                    storeToken(token);
                }
            }
        } catch (error) {
            console.warn(`Registration error: ${error}`);
        }
    };

    return (
        <div className="auth-form">
            <h2>Registration Form</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>Enter your username:</label>
                <input
                    name="username"
                    type="text"
                    value={credentials.username}
                    onChange={(e) => handleChange(e)}
                />
                <label>Enter your email:</label>
                <input
                    name="email"
                    type="email"
                    value={credentials.email}
                    onChange={(e) => handleChange(e)}
                />
                <label>Enter your password:</label>
                <input
                    name="password"
                    type="password"
                    value={credentials.password}
                    onChange={(e) => handleChange(e)}
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterPage;
