import { NavLink } from "react-router-dom";

import "./SideNavBar.css";

export const SideNavBar = () => {

    const activeStyle = {color: "#fff"}

    const notActiveStyle = {color: "#666666"}

    return(
        <>
        <div className="sidenav-container">
            <div className="dashboard-container navigator">
                <NavLink to="/" className="navi" style={({ isActive }) => (isActive ? activeStyle : notActiveStyle)}>Dashboard</NavLink>
            </div>
            <div className="departments-container navigator">
                <NavLink to="/departments" className="navi" style={({ isActive }) => (isActive ? activeStyle : notActiveStyle)}>Departments</NavLink>
            </div>
            <div className="products-container navigator">
                <NavLink to="/products" className="navi" style={({ isActive }) => (isActive ? activeStyle : notActiveStyle)}>Products</NavLink>
            </div>
        </div>
        </>
    )
}