import { Route, Routes } from "react-router-dom";

import './App.css';
import { SideNavBar } from './components/SideNavBar';
import { DashboardPage } from "./pages/dashboardPage/DashboardPage";
import { DepartmentsPage } from "./pages/departmentsPage/DepartmentsPage";
import { ProductlistPage } from "./pages/productlistPage/ProductlistPage";
import { AddnewproductPage } from "./pages/addnewproductPage/AddnewproductPage";

function App() {
  return (
    <>
      <div className="App">
        <SideNavBar />

        <Routes>
          <Route path="/" element={<DashboardPage />}/>
          <Route path="/departments" element={<DepartmentsPage />}/>
          <Route path="/products" element={<ProductlistPage />}/>
          <Route path="/addnewproduct" element={<AddnewproductPage />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
