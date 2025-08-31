import React from "react"
import { NavLink, Outlet } from "react-router-dom";
const HostVanDetailLayout = () => {
   return (<>
        <div className="host-layout-container">
            <nav className="host-nav">
                <NavLink to="." end className={({ isActive }) => isActive ? "host-nav-link active" : "host-nav-link"} >
                    Details
                </NavLink>                

                <NavLink to="pricing" className={({ isActive }) => isActive ? "host-nav-link active" : "host-nav-link"}>
                    Pricing
                </NavLink>
                <NavLink to="photo" className={({ isActive }) => isActive ? "host-nav-link active" : "host-nav-link"} >
                    Photos
                </NavLink>

                <NavLink to="more" className={({ isActive }) => isActive ? "host-nav-link active" : "host-nav-link"}>
                    more...
                </NavLink>
            </nav>           
        </div>
        {/* <Outlet /> */}
        </>
    );
}

export default HostVanDetailLayout