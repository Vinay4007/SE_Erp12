import React from "react";

import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/home",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },

  {
    title: "Transactions",
    path: "/sp",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Mess Account",
    path: "/mess1",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  // {
  //     title: 'Budgets',
  //     path:'/budget',
  //     icon: <IoIcons.IoIosPaper />,
  //     cName: 'nav-text',

  // },
  // {
  //     title: 'Employee',
  //     path:'/eal',
  //     icon: <IoIcons.IoIosPaper />,
  //     cName: 'nav-text',

  // },
  // {
  //     title: 'Cultural Expenses',
  //     path:'/cultural',
  //     icon: <IoIcons.IoIosPaper />,
  //     cName: 'nav-text',

  // },
  // {
  //     title: 'Scholarship',
  //     path:'/scholar',
  //     icon: <IoIcons.IoIosPaper />,
  //     cName: 'nav-text',

  // },
  // {
  //     title: 'Sponsered Projects',
  //     path:'/fund',
  //     icon: <IoIcons.IoIosPaper />,
  //     cName: 'nav-text',

  // },
  // {
  //     title: 'General Ledger',
  //     path:'/others',
  //     icon: <IoIcons.IoIosPaper />,
  //     cName: 'nav-text',

  // },
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
  {
    title: "AboutUser",
    path: "/about",
    icon: <IoIcons.IoMdPerson />,
    cName: "nav-text",
  },
];
