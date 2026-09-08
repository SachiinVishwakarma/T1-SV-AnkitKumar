import {Box,Stack} from "@mui/material"
import Servicesbox from "./Servicesbox";
import Subheading from "../Subheading/Subheading";
const Services=()=>{
    return(
        <>
        <Subheading txt="What's Included"/>
        <Box sx={{display:'flex',flexDirection:"column",justifySelf:"center"}}>
            
            <Stack direction="row" spacing={1} sx={{mb:"10px"}}>
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
