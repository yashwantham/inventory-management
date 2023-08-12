import { useContext } from "react";
import "./ProductlistPage.css";
import { DataContext } from "../../contexts/DataProvider";
import { ProductCard } from "./ProductCard";


export const ProductlistPage = () => {

    const { dataState, dispatchData } = useContext(DataContext);

    const deptFilterSetter = (e) => dispatchData({type: "set_deptFilterOption", payload: e.target.value})

    const ascendingOptionSetter = (e) => dispatchData({type: "set_sortOrder", payload: e.target.value})

    let displayList = [...dataState.productList];

    if(dataState.deptFilterOption === "kitchen") {
        displayList = displayList.filter(({department}) => department === "Kitchen");
    }
    else if(dataState.deptFilterOption === "clothing") {
        displayList = displayList.filter(({department}) => department === "Clothing")
    }
    else if(dataState.deptFilterOption === "toys") {
        displayList = displayList.filter(({department}) => department === "Toys")
    }
    else if(dataState.deptFilterOption === "all-departments") {
        displayList = [...dataState.productList];
    }

    if(dataState.sortOrder === "name") {
        displayList = displayList.sort((a, b) => a.name.localeCompare(b.name));
    }
    else if(dataState.sortOrder === "price") {
        displayList = displayList.sort((a, b) => a.price - b.price);
    }
    else if(dataState.sortOrder === "stock") {
        displayList = displayList.sort((a, b) => a.stock - b.stock);
    }

    return (
        <>
        <div className="productlistpage-container">
            <div className="topbar">
                <div className="pageheading">
                    <h2>Products</h2>
                </div>
                <div className="deptfilter-container">
                    <select name="department" id="" value={dataState.deptFilterOption} onChange={(e) => deptFilterSetter(e)}>
                        <option value="all-departments">All Departments</option>
                        <option value="kitchen">Kitchen</option>
                        <option value="clothing">Clothing</option>
                        <option value="toys">Toys</option>
                    </select>
                </div>
                <div className="lowstockcheck-container">
                    <input type="checkbox" onChange={() => dispatchData({type: "toggle_lowStockItemsCheck"})}/> <label>Low Stock Items</label>
                </div>
                <div className="ascendingfilter-container">
                    <select name="ascending" id="" value={dataState.sortOrder} onChange={(e) => ascendingOptionSetter(e)}>
                    <option value="name">Name</option>
                    <option value="price">Price</option>
                    <option value="stock">Stock</option>
                    </select>
                </div>
                <div className="newbtn-container">
                    New
                </div>
            </div>

            <div className="productlist-container">
                <div className="columnheading-container">
                    <div className="columnheading-img">
                        Image
                    </div>
                    <div className="columnheading-name">
                        Name
                    </div>
                    <div className="columnheading-description">
                        Description
                    </div>
                    <div className="columnheading-price">
                        Price
                    </div>
                    <div className="columnheading-stock">
                        Stock
                    </div>
                    <div className="columnheading-supplier">
                        Supplier
                    </div>
                </div>
                <div className="productlist">
                    {displayList.map((product) => <ProductCard product={product}/>)}
                </div>
            </div>

        </div>
        </>
    )
}