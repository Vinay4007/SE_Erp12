import React from 'react'

import Style from "./../modules/MenuItem.module.css"
import { NavLink } from 'react-router-dom'

export function MenuItem(props) {

  
  return (

    <div className={Style.dropdown} onMouseEnter= {(event)=>{
      document.getElementById(props.id).getElementsByClassName('menudropdown').item(0).setAttribute("display","block");
    }}  onMouseLeave = {(event)=>{
      document.getElementById(props.id).getElementsByClassName('menudropdown').item(0).setAttribute("display","none");
    }} id={props.id}>
      <button className={Style.dropbtn}>{props.menu.menuName}</button>
      <div className={`${Style.dropdowncontent} menudropdown`}>
      {
          props.menu.menuContentArray.map((element, id) => {
            return <NavLink key={element.menuContentName}
                to={element.locationText}>{element.menuContentName}</NavLink>
          })
        }
      </div>
    </div>

  )
}

