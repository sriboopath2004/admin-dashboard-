import './App.css';
import { Routes , Route } from 'react-router-dom';
import AdminMenu from './Dashboard/AdminMenu';
import OrderDetails from "./Dashboard/OrderDetails";
import FoodDetails from './Dashboard/FoodDetails';
import CustomerDetails from './Dashboard/CustomerDetails';
import SupplierInfo from './Dashboard/SupplierInfo';
import Notifications from './Dashboard/Notifications';

function App() {
  return (
    <div>
      <Routes> 
      <Route path="/" element={<AdminMenu />} />
      <Route path="/OrderDetails" element={<OrderDetails />} />
      <Route path='/FoodDetails' element={<FoodDetails />} />
      <Route path='/CustomerDetails' element={ <CustomerDetails />} />
      <Route path='/SupplierInfo' element={ <SupplierInfo />} />
      <Route path='/Notifications' element={ <Notifications />} />
    </Routes>
    </div>
  );
}

export default App;
