import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

import "./AddnewproductPage.css";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataProvider";

export const AddnewproductPage = () => {

    const navigate = useNavigate();

    const { dataState, dispatchData } = useContext(DataContext);

    const SubmitHandler = (e) => {
        const newProduct = {
            id: uuid(),
            department: e.target.department.value,
            name: e.target.name.value,
            description: e.target.description.value,
            price: Number(e.target.price.value),
            stock: Number(e.target.stock.value),
            sku: e.target.sku.value,
            supplier: e.target.supplier.value,
            delivered: Number(e.target.delivered.value),
            imageUrl: e.target.imageURL.value,
          }
        
        const newproductList = [...dataState.productList, newProduct];

        dispatchData({type: "set_productList", payload: newproductList})
        localStorage.setItem("productlist", JSON.stringify(newproductList));
        navigate("/products");
    }

    return (
        <>
            <div className="addnewproductpage-container">
                <div className="pageheading">
                    <h2>Add New Product</h2>
                </div>

                <form action="" className="inputform" onSubmit={(e) => SubmitHandler(e)}>

                    <p>Department:</p>
                    <select name="department" id="department" required>
                        <option value="">Select Department</option>
                        <option>Kitchen</option>
                        <option>Toys</option>
                        <option>Clothing</option>
                    </select>

                    <p>Name:</p>
                    <input type="text" id="name" required/>

                    <p>Description:</p>
                    <input type="text" id="description" required/>

                    <p>Price:</p>
                    <input type="number" id="price" value="0" required/>

                    <p>Stock:</p>
                    <input type="number" id="stock" value="0" required/>

                    <p>SKU:</p>
                    <input type="text" id="sku" required/>

                    <p>Supplier:</p>
                    <input type="text" id="supplier" required/>

                    <p>Delivered:</p>
                    <input type="text" id="delivered" value="0" required/>

                    <p>Image URL:</p>
                    <input type="text" id="imageURL" required/>

                    <div>
                    <button type="submit" className="submitbtn">Submit</button>
                    </div>

                </form>

            </div>
        </>
    )
}