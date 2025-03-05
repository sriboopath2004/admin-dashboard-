import { Routes, Route } from "react-router-dom";
import AdminMenu from "./AdminMenu";
import OrderDetails from "../OrderDetails"; // Import your target component
import FoodDetails from "../FoodDetails";
import CustomerDetails from "../CustomerDetails";
import SupplierInfo from "../SupplierInfo";
import Notifications from "../Notifications";
import Login from "../Login";

function App() {
  return (
    <Routes>
      <Route path="/" element ={<Login />} />
      <Route path="/Dashboard" element={<AdminMenu />} />
      <Route path="/OrderDetails" element={<OrderDetails />} />
      <Route path="/FoodDetails" element={<FoodDetails />} />
      <Route path='/CustomerDetails' element={ <CustomerDetails />} />
      <Route path='/SupplierInfo' element={ <SupplierInfo />} />
      <Route path='/Notifications' element={ <Notifications />} />
    </Routes>
  );
}

export default App;
