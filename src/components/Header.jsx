import React from 'react';
import { NavLink , Link } from 'react-router-dom';
import '../index.css';

const Header = () => {
    const activeStyles = {
        fontWeight: "bold",         
        fontSize: "1.5rem",
        textDecoration: "underline",
        color: "red" //"#161616"
    }
    return (
        <header>
            <Link className="site-logo" to="/">#Van Life</Link>
            <nav>
                {/* <NavLink to="/host" className={({isActive})=>{ isActive ? "host-nav-link active" : "host-nav-link"}}>Host</NavLink> */}
                <NavLink to="/host" style={({isActive}) => isActive ? activeStyles  : null}>Host</NavLink>
                <NavLink to="/about" style={({isActive}) => isActive ? activeStyles  : null}>About</NavLink>
                <NavLink to="/vans" style={({isActive}) => isActive ? activeStyles  : null}>Vans</NavLink>
            </nav>
        </header>
    );
}
export default Header;