import routes from "../routes/sidebar";
import { NavLink, Routes, Link, useLocation } from "react-router-dom";
import SidebarSubmenu from "./SidebarSubmenu";
import XMarkIcon from "@heroicons/react/24/outline/XMarkIcon";
import { useDispatch } from "react-redux";
import logo from "../assets/blackknightleft.png";
import React from "react";

function LeftSidebar() {
  const location = useLocation();
  const dispatch = useDispatch();

  const close = (e: React.MouseEvent) => {
    (document.getElementById("left-sidebar-drawer") as HTMLInputElement).click();
  };

  return (
    <div className="drawer-side ">
      <label htmlFor="left-sidebar-drawer" className="drawer-overlay"></label>
      <ul className="menu w-60 bg-base-100 text-base-content">
        <li className="mb-5 font-semibold text-xl bg-teal-400 text-[color:black]">
          <Link to={"/app"}>
            <img className="mask w-9" src={logo} alt="DashWind Logo" />
            <h1 className={`font-serif italic text-3xl text-center font-bold`}>CHESS GAME</h1>
          </Link>{" "}
        </li>
        {routes.map((route, k) => {
          return (
            <li className="" key={k}>
              {route.submenu ? (
                <SidebarSubmenu {...route} />
              ) : (
                <NavLink
                  end
                  to={route.path}
                  className={({ isActive }) => `${isActive ? "font-semibold  bg-base-200 " : "font-normal"}`}
                >
                  {route.icon} {route.name}
                  {location.pathname === route.path ? (
                    <span
                      className="absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary "
                      aria-hidden="true"
                    ></span>
                  ) : null}
                </NavLink>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default LeftSidebar;
