import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Dashboard",
    path: "/Dashboard",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "About",
    path: "/About",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "item",
    path: "/ItemDetails",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
];
