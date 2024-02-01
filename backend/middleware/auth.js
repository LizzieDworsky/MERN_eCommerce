const jwt = require("jsonwebtoken");

function auth(req, res, next) {
    //* Retrieve token from Authorization header.
    const authHeader = req.header("Authorization");
    const token = authHeader && authHeader.split(" ")[1];

    //* No token? Stop here and send a 401.
    if (!token) {
        return res.status(401).send("Access denied. Token is missing.");
    }
    try {
        //* present? Validate it.
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        //* Token is valid! Attach user info to the request.
        req.user = decoded;

        //* Continue on.
        next();
    } catch (error) {
        res.status(401).send("Invalid token.");
    }
}

module.exports = auth;
