import React from 'react'
import  Style from './../modules/PayrollFaculty.module.css'
import Sidebar from '../Payroll/Sidebar/Sidebar'
import {Outlet} from "react-router-dom";


export function FacultyPayr() {

  return (

    <div className={Style.container}>
    <div className={Style.side}><Sidebar/></div>
    <Outlet />
    </div>
  );
}
