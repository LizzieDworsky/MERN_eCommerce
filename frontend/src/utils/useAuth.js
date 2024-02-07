import { useState, useEffect, createContext, useContext } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const value = { user };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};
