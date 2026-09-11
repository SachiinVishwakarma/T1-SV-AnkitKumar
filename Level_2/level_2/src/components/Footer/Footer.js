import {AppBar,Container,Stack,Toolbar,useTheme} from "@mui/material"
import Navbutton from "../Button/Navbutton";
import Colorbutton from "../Button/Colorbutton";
import Text from "../text/Text";
import { Footerstyle } from "../../Theme/Footerstyle";
const Footer=()=>{
    const theme = useTheme();
    const styles = Footerstyle(theme);
    return(
    <AppBar
            position="static"
            elevation={4}
            sx={styles.footer}
        >
            <Container maxWidth="lg">
            <Toolbar
                disableGutters
                sx={styles.toolbar}
            >
                
                <Text txt="© 2023 webTech Practice build for learning and growth" sx={styles.text}/>

                
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