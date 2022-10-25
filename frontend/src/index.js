import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { MainApp } from "./MainApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Auth0Provider
        domain="dev-u74mf-a2.us.auth0.com"
        clientId="tWkBScRVJSHDySyQiyuCACYNd9GLdwOz"
        redirectUri="http://localhost:3000/home/profile"
        audience="http://localhost:3000/home/profile"
        scope="read:current_user update:current_user_metadata"
    >
        <MainApp />
    </Auth0Provider>
);
