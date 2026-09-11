import {Box,useTheme} from "@mui/material";
import Subheading from "../Subheading/Subheading";
import Text from "../text/Text";
import Aboutinfo from "./Aboutinfo";
import { Aboutstyle } from "../../Theme/Aboutstyle";
const About=()=>{
  const theme = useTheme();
  const styles = Aboutstyle(theme);
    return(
        <Box
          sx={styles.about}
        >
          <br/>
          <br/>
          <Subheading txt="About This Project"/>

          <Text sx={styles.description} txt="This comprehensive template is designed for students and developers to practice modern 
                web fundamentals—responsive layouts, accessible forms, client-side state management, and 
                component architecture—without any frameworks or complex build processes."/>

          <Aboutinfo/>
          
          <Aboutinfo/>
          <Aboutinfo/>
          <Aboutinfo/>
          <Aboutinfo/>
          <Aboutinfo/>
        </Box>
    )
}
export default About;