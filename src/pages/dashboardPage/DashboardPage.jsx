import { useContext } from "react";
import "./DashboardPage.css";
import { DataContext } from "../../contexts/DataProvider";
import { DashboardCard } from "./DashboardCard";

export const DashboardPage = () => {

    const {dataState} = useContext(DataContext);

    const totalStockCount = dataState.productList.reduce((total, {stock}) => total + stock, 0);
    // console.log(dataState.productList, totalStockCount);

    const totalDeliveredCount = dataState.productList.reduce((total, {delivered}) => total + delivered,0);

    const lowStockItemsCount = dataState.productList.reduce((total, {quantity}) => quantity <= 10 ? total + 1 : total ,0);

    return (
        <>
        
        <div className="dashboardpage-container">
            <div className="dashboard-cards-list">
                <DashboardCard number={totalStockCount} text="Total Stock" color="#02B303" />
                <DashboardCard number={totalDeliveredCount} text="Total Delivered" color="#FFA500" />
                <DashboardCard number={lowStockItemsCount} text="Low Stock Items" color="#FF0000" />
            </div>
        </div>

        </>
    )
}