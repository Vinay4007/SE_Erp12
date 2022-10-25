import { Avatar, IconButton, SpeedDial, SpeedDialAction } from '@mui/material';
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import HelpIcon from "@mui/icons-material/Help"
import CloseIcon from "@mui/icons-material/Close"
import SpeedDialIcon from "@mui/material/SpeedDialIcon"

import AboutIcon from "@mui/icons-material/HelpOutline"
import ContactIcon from "@mui/icons-material/ContactMail"
import DeveloperIcon from "@mui/icons-material/GitHub"

import Style from "./modules/ProfileSection.module.css"

import { useAuth0 } from "@auth0/auth0-react"

export function ProfileSection(props) {

  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const authLogin = (event, values) => {
    console.log(`Login Started value ${JSON.stringify(values)}`)
    loginWithRedirect({
      screen_hint: "signup"
    });
  }

  const authLogout = (event) => {
    logout();
  }


  const actions = [
    {
      name: "about",
      tooltip: "About",
      icon: <AboutIcon />
    },
    {
      name: "contact",
      tooltip: "contact us",
      icon: <ContactIcon />
    },
    {
      name: "github",
      tooltip: "Github Repo",
      icon: <DeveloperIcon />
    }
  ]

  return (

    <div className={Style.profile}>

      <div id="navsidepanel" className={Style.overlay}>
        <IconButton aria-label='help' size="large" color='primary'><HelpIcon fontSize='large' /></IconButton>
        <div className={Style.closebtn}>
          <IconButton aria-label='close' size='large' color='error' onClick={
            () => {
              document.getElementById("navsidepanel").style.width = "0%";
            }
          }><CloseIcon fontSize='large' /></IconButton>
          <SpeedDial ariaLabel='speedial help' icon={<SpeedDialIcon />} direction="down" sx={{ fontSize: 20 }}>
            {
              actions.map((action) => (
                <SpeedDialAction key={action.name} tooltipTitle={action.tooltip} icon={action.icon} tooltipPlacement="left"
                  onClick={(event) => {
                    console.log(`Clicked ${action.name}`)
                  }} />
              ))
            }
          </SpeedDial>
        </div>
        <div className={Style.overlaycontent}>
          <NavLink to="/home/profile/">Profile</NavLink>
          {
            isAuthenticated ? (<NavLink onClick={authLogout}>Logout</NavLink>)
              : (<NavLink onClick={authLogin}>Login</NavLink>)
          }
        </div>
      </div>

      <div className={Style.profileicon}>
        <button className={Style.profileopenbut} onClick={() => {
          document.getElementById("navsidepanel").style.width = "100%";
        }}>
          {/* <Avatar alt="Oops" src="./../icons/profile.jpeg" /> */}
          <Avatar src="https://play-lh.googleusercontent.com/NX2yIzhb1SyMKmn0N0CFyLqY_U9U-uhD06ITeJSg67IKMCHZ50SgylgrqhHdGn1Zabs" />
        </button>
      </div>

    </div>
  )
}
