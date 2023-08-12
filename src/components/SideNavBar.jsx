import { NavLink } from "react-router-dom";

import "./SideNavBar.css";

export const SideNavBar = () => {
    return(
        <>
        <div className="sidenav-container">
            <div className="dashboard-container navigator">
                <NavLink to="/">Dashboard</NavLink>
            </div>
            <div className="departments-container navigator">
                <NavLink to="/departments">Departments</NavLink>
            </div>
            <div className="products-container navigator">
                <NavLink to="/products">Products</NavLink>
            </div>
        </div>
        </>
    )
}