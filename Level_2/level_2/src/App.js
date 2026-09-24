import { ThemeProvider } from "@emotion/react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Landing_page from "./pages/Landing";
import Theme from "./Theme/Theme";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
function App() {

  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing_page/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
