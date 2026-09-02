import {Box,Typography,Stack,} from "@mui/material";
import Subheading from "../Subheading/Subheading";
import Text from "../text/Text";
import Aboutinfo from "./Aboutinfo";
const About=()=>{
    return(
        <Box
          sx={{
            textAlign: "center",
            mb: 10,
          }}
        >
          <br/>
          <br/>
          <Subheading txt="About This Project"/>

          <Text sx={{maxWidth: "738px",display: "flex",justifySelf: "center",mb: 4,mt: 2,}} txt="This comprehensive template is designed for students and developers to practice modern 
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