import {BrowserRouter,Routes,Route} from "react-router-dom";
import Landing_page from "./pages/Landing";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Sidebar from "./components/Sidebar/Sidebar";
function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing_page/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/sidebar" element={<Sidebar/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
