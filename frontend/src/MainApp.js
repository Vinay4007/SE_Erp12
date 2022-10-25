import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AnimatedRoutes } from "./AnimatedRoutes";

export function MainApp() {
    return (
        <>
            <BrowserRouter basename="/">
                <AnimatedRoutes />
            </BrowserRouter>
        </>
    );
}
