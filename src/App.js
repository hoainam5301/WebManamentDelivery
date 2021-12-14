import SideBar from "./components/sidebar/sideBar";
import TopBar from "./components/topbar/topBar";
import "./App.css"
import Home from "./page/home/home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import UserList from "./page/userList/userList";
import User from "./page/user/user";
import NewUser from "./page/newUser/newUser";


function App() {
  return (
    <Router>
      <TopBar />
      <div className="container">
        <SideBar />
        <Routes >
        <Route path='/' element={<Home/>} />
        <Route path='/users' element={<UserList/>} />
        <Route path='/user/:userId' element={<User/>} />
        <Route path='/newUser' element={<NewUser/>} />
        </Routes >
      </div>
    </Router>
  );
}

export default App;
