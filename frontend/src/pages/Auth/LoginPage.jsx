const LoginPage = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="auth-form">
            <h2>Login Form</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>Enter your username:</label>
                <input type="text" />
                <label>Enter your password:</label>
                <input type="password" />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
