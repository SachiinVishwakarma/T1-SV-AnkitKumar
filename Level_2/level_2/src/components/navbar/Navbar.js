import {AppBar,Container,Typography,Stack,Toolbar} from "@mui/material"
import Navbutton from "../Button/Navbutton";
import Colorbutton from "../Button/Colorbutton";
const Navbar=()=>{return(
    <AppBar
            position="static"
            elevation={4}
            sx={{
            backgroundColor: "#06286f",
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
                sx={{
                    color: "white",
                    fontSize: "24px",
                    fontWeight: 600,
                }}
                >
                WebTech Practice
                </Typography>

                
                <Stack direction="row" spacing={1.0}>
                
                <Navbutton txt="About"/>

                <Navbutton txt="Services"/>

                <Navbutton txt="Theme"/>

                <Navbutton txt="Login"/>

                <Colorbutton txt="Signup"/>

                
                </Stack>
            </Toolbar>
            </Container>
        </AppBar>

        );
}
export default Navbar;