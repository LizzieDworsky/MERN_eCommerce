import { useState } from "react";

const RegisterPage = () => {
    const [credentials, setCredentials] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(credentials);
    };

    return (
        <div className="register-page">
            <h2>Registration Form</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>Enter your username:</label>
                <input name="username" type="text" />
                <label>Enter your email:</label>
                <input name="email" type="email" />
                <label>Enter your password:</label>
                <input name="password" type="password" />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterPage;
