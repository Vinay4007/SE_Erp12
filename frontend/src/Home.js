import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

import Style from "./modules/Home.module.css";

const FMLocation = "finanmg";
const ACLocation = "accountsmg";

const FMLabel = "FCM";
const ACLabel = "ACM";

export function Home() {
    const { heading, setHeading } = useState("Home");

    return (
        <div className={Style.wscreen}>
            <div className={Style.lnavbar}>
                <NavLink
                    to={`${FMLocation}`}
                    onClick={(_event) => {
                        setHeading(FMLabel);
                    }}
                >
                    {FMLabel}
                </NavLink>
            </div>
                <br/><br/>

            <div className={Style.lnavbar}>
                <NavLink
                    to={`${ACLocation}`}
                    onClick={(_event) => {
                        setHeading(ACLabel);
                    }}
                >
                    {ACLabel}
                </NavLink>
            </div>
            <div className={Style.lheader}>
                <div>{heading}</div>
            </div>
            <div className={Style.lcontent}>
                    <Outlet />
            </div>
        </div>
    );
}
