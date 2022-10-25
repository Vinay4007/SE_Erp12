import React, { createContext, useState } from 'react'

import { Outlet } from 'react-router-dom'
import { Menubar } from './Menubar'
import { ProfileSection } from "./ProfileSection"
import { Logo } from "./Logo"

import Style from "./modules/Home.module.css"
import {motion} from "framer-motion/dist/framer-motion"

const ThemeContext = createContext(null);

export function Home() {


  const [theme, setTheme] = useState("light")
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }

  return (
      <div className={Style.home} 
      id={theme}>

        <div className={Style.header}>

          <div className={Style.logo}>
            <Logo />
          </div>

          <div className={Style.menubar}>
            <Menubar simpleValue="Hi Krishna" />
          </div>

          <div className={Style.profileicon}>
            <ProfileSection />
          </div>
        </div>

        <motion.div className={Style.contentPane}
              initial ={{width :0}}
              animate ={{width :"100%"}}
              exit={{x :"100%" , transition : {duration :0.3 }}}>
          <Outlet />
        </motion.div>

      </div>
  )
}
