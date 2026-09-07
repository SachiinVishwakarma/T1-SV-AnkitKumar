import { createTheme } from "@mui/material";

const Theme = createTheme({
  palette: {
    primary: {
      main: "#06286f",
      dark: "#000000",
    },

    secondary: {
      main: "#35cfc2",
      dark: "#2bb9ae",
    },

    background: {
      default: "#ffffff",
    },

    text: {
      primary: "#000000",
      secondary: "#ffffff",
    },
  },

  typography: {
    fontFamily: "sans-serif",
    fontSize: 16,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
});

export default Theme;