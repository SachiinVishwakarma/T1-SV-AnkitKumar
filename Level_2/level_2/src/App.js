import { ThemeProvider } from "@emotion/react";
import Landing_page from "./pages/Landing";
import Theme from "./Theme/Theme";
function App() {

  return (
    <ThemeProvider theme={Theme}>
      <Landing_page/>
    </ThemeProvider>
  );
}

export default App;
