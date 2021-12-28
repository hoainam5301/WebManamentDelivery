import SideBar from "./components/sidebar/sideBar";
import TopBar from "./components/topbar/topBar";
import "./App.css"
import Home from "./page/home/home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import DeliveryStaff from "./page/manaDeliveryStaff/deliveryStaff";
import EditDeliveryStaff from "./page/manaDeliveryStaff/editDeliveryStaff/editDeliveryStaff";
import CreateDeliveryStaff from "./page/manaDeliveryStaff/createDeliveryStaff/createDeliveryStaff";
import ManaStore from "./page/manaStore/store";
import EditStore from "./page/manaStore/editStore/editStore";
import CreateStore from "./page/manaStore/createStore/createStore";
import ManaCommision from "./page/manaCommision/commision";
import EditCommision from "./page/manaCommision/editCommision/editCommision";
import CreateCommision from "./page/manaCommision/createCommision/createCommision";
import ManaDeliveryMethod from "./page/manaDeliveryMethod/deliveryMethod";
import EditDeliveryMethod from "./page/manaDeliveryMethod/editDeliveryMethod/editDeliveryMethod";
import CreateDeliveryMethod from "./page/manaDeliveryMethod/createDeliveryMethod/createDeliveryMethod";
import ManaOrder from "./page/manaOrder/order";
import EditOrder from "./page/manaOrder/editStore/editOrder";
import ManaWareHouse from "./page/manaWareHouse/wareHouse";
import EditWareHouse from "./page/manaWareHouse/editWareHouse/editWareHouse";
import CreateWareHouse from "./page/manaWareHouse/createWareHouse/createWareHouse";
import Login from "./page/login/login";


function App() {
  const isPageLogin = window.location.pathname === "/login";
  return (
    <Router>
      {!isPageLogin && <TopBar />}
      <div className="container">
        {!isPageLogin && <SideBar />}
        <Routes >
        <Route path='/login' element={<Login/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/staffs' element={<DeliveryStaff/>} />
        <Route path='/staff/:staffid' element={<EditDeliveryStaff/>} />
        <Route path='/createStaff' element={<CreateDeliveryStaff/>} />
        <Route path='/stores' element={<ManaStore/>} />
        <Route path='/store/:storeid' element={<EditStore/>} />
        <Route path='/createstore' element={<CreateStore/>} />
        <Route path='/commisions' element={<ManaCommision/>} />
        <Route path='/commision/:commisionid' element={<EditCommision/>} />
        <Route path='/createcommision' element={<CreateCommision/>} />
        <Route path='/deliverymethods' element={<ManaDeliveryMethod/>} />
        <Route path='/deliverymethod/:deliverymethodid' element={<EditDeliveryMethod/>} />
        <Route path='/createdeliverymethod' element={<CreateDeliveryMethod/>} />
        <Route path='/orders' element={<ManaOrder/>} />
        <Route path='/order/:orderid' element={<EditOrder/>} />
        <Route path='/warehouse' element={<ManaWareHouse/>} />
        <Route path='/warehouse/:warehouseid' element={<EditWareHouse/>} />
        <Route path='/createwarehouse' element={<CreateWareHouse/>} />
        </Routes >
      </div>
    </Router>
  );
}

export default App;
