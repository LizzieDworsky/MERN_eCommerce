import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

import ProductsPage, { getAllProducts } from "./pages/eCommerce/ProductsPage";
import ProductDetailsPage, {
    getProduct,
} from "./pages/eCommerce/ProductDetailsPage";
import ShoppingCartPage from "./pages/eCommerce/ShoppingCartPage";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";

import { AuthProvider } from "./utils/useAuth";
import PrivateRoute from "./utils/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "",
        element: <App />,
        children: [
            {
                path: "/",
                element: <ProductsPage />,
                loader: getAllProducts,
            },
            {
                path: "/product/:productId",
                element: <ProductDetailsPage />,
                loader: getProduct,
            },
            {
                path: "cart",
                element: (
                    <PrivateRoute>
                        <ShoppingCartPage />
                    </PrivateRoute>
                ),
            },
            {
                path: "login",
                element: <LoginPage />,
            },
            {
                path: "register",
                element: <RegisterPage />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>
);
