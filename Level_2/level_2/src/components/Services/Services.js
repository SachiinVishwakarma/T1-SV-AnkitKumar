import {Box,Stack,useTheme} from "@mui/material"
import Servicesbox from "./Servicesbox";
import Subheading from "../Subheading/Subheading";
import { Servicesstyle } from "../../Theme/Servicesstyle";
const Services=()=>{
    const theme = useTheme();
    const styles = Servicesstyle(theme);
    return(
        <>
        <Subheading txt="What's Included"/>
        <Box sx={styles.services}>
            
            <Stack direction="row" spacing={1} sx={styles.stack}>
                <Servicesbox/>
                <Servicesbox/>
                <Servicesbox/>
            </Stack>
            <Stack direction="row" spacing={1}>
                <Servicesbox/>
                <Servicesbox/>
                <Servicesbox/>
            </Stack>
          
        </Box>
        </>
    )
}

export default Services;
