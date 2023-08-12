import { useContext } from "react";
import "./ProductlistPage.css";
import { DataContext } from "../../contexts/DataProvider";

export const ProductlistPage = () => {

    const { dataState } = useContext(DataContext);

    return (
        <>
        <div className="productlistpage-container">
            {dataState.productList[0].name};
        </div>
        </>
    )
}