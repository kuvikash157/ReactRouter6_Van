import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
    return (
        <div className="host-layout-container">
            <nav className="host-nav">
                <NavLink to="." end className={({ isActive }) => isActive ? "host-nav-link active" : "host-nav-link"} >
                    Dashboard
                </NavLink>

                <NavLink to="income" className={({ isActive }) => isActive ? "host-nav-link active" : "host-nav-link"}>
                    Income
                </NavLink>

                <NavLink to="vans" className={({ isActive }) => isActive ? "host-nav-link active" : "host-nav-link"}>
                    Vans
                </NavLink>
                <NavLink to="reviews" className={({ isActive }) => isActive ? "host-nav-link active" : "host-nav-link"} >
                    Reviews
                </NavLink>
            </nav>
            <Outlet />
        </div>
    );
}