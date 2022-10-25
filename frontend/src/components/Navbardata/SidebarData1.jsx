import React from "react";

import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData1 = [
  {
    title: "Home",
    path: "/home1",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },

  {
    title: "Employee",
    path: "/eal",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Projects",
    path: "/projects",
    icon: <IoIcons.IoIosLaptop />,
    cName: "nav-text",
  },
  {
    title: "Team",
    path: "/team",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
  {
    title: "Logout",
    path: "/",
    icon: <IoIcons.IoMdLogOut />,
    cName: "nav-text",
  },
];
