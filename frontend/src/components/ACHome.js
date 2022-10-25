import React from "react";
import { Outlet } from "react-router-dom";

import Style from "./modules/ACHome.module.css"

export function ACHome() {
    return <div className={Style.print}>
        <div className={Style.bckground}>
            <Outlet />
            </div>
    </div>;
}
