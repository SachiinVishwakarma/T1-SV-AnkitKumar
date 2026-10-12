import {BrowserRouter,Routes,Route} from "react-router-dom";
import Landing_page from "./pages/Landing";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Security from "./pages/Security";
import Notification from "./pages/Notification";
import Help from "./pages/Help";
import Sidebar from "./components/Sidebar/Sidebar";
function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing_page/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route element={<Sidebar/>}>
            <Route path="dashboard"element={<Dashboard/>}/>
            <Route path="profile" element={<Profile/>}/>
            <Route path="Security" element={<Security/>}/>
            <Route path="notification" element={<Notification/>}/>
            <Route path="Help" element={<Help/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
