import {AppBar,Container,Typography,Stack,Toolbar,} from "@mui/material";
import Navbutton from "../Button/Navbutton";
import Colorbutton from "../Button/Colorbutton";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      elevation={4}
      sx={{
        backgroundColor: "primary.main",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            minHeight: "60px !important",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={(theme)=>({
              color: "text.secondary",
              fontSize: "24px",
              fontWeight: theme.typography.fontWeightBold,
            })}
          >
            WebTech Practice
          </Typography>

          <Stack direction="row" spacing={1}>
            <Navbutton txt="Home" />
            <Navbutton txt="About" />
            <Navbutton txt="Services" />
            <Navbutton txt="Theme" />
            <Navbutton txt="Login" />
            <Colorbutton txt="Signup" />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;