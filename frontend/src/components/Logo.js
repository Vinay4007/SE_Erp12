import React from 'react'
import { useNavigate } from 'react-router-dom';
import AppLogo from "./assets/IIT-LOGO.svg"

import Style from "./modules/Logo.module.css"

export const Logo = (props) => {

  const navigate = useNavigate()

  function OnLogoClick(event) {
    navigate("/home")
  }

  return (
    <>
     <button type='button' onClick={OnLogoClick} className={Style.logobut}>
       <img src={AppLogo} className={Style.logo} alt="Oops!"/>
     </button>
    </>
  )
}


