import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import "./DepartmentsPage.css";
import { DataContext } from "../../contexts/DataProvider";

export const DepartmentsPage = () => {

    const navigate = useNavigate();
    
    const { dispatchData } = useContext(DataContext);

    const setDeptHandler = (tex) => {
        dispatchData({type: "set_deptFilterOption", payload: tex});
        navigate("/products");
    }

    return (
        <>
        <div className="departmentspage-container">
            <div className="dept-card" onClick={() => setDeptHandler("kitchen")}>
                Kitchen
            </div>
            <div className="dept-card" onClick={() => setDeptHandler("clothing")}>
                Clothing
            </div>
            <div className="dept-card" onClick={() => setDeptHandler("toys")}>
                Toys
            </div>
        </div>
        </>
    )
}