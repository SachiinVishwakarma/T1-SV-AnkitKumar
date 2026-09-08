import {AppBar,colors,Container,Stack,Toolbar} from "@mui/material"
import Navbutton from "../Button/Navbutton";
import Colorbutton from "../Button/Colorbutton";
import Text from "../text/Text";
const Footer=()=>{return(
    <AppBar
            position="static"
            elevation={4}
            sx={{
            backgroundColor: "#06286f",
            mt:"100px",
            }}
        >
            <Container maxWidth="lg">
            <Toolbar
                disableGutters
                sx={{
                minHeight: "166px !important",
                justifyContent: "space-between",
                }}
            >
                
                <Text txt="© 2023 webTech Practice build for learning and growth" sx={{color:"white",mt:"20px"}}/>

                
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
export default Footer;