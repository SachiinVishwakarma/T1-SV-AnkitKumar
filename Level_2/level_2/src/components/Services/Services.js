import {Box,Stack} from "@mui/material"
import Servicesbox from "./Servicesbox";
import Subheading from "../Subheading/Subheading";
const Services=()=>{
    return(
        <>
        <Subheading txt="What's Included"/>
        <Box sx={{display: "flex",justifySelf:"center", ml: 7}}>
            
            <Stack direction="row" spacing={1} sx={{display: "flex", flexWrap: "wrap",}}>
                <Servicesbox/>
                <Servicesbox/>
                <Servicesbox/>
                <Servicesbox/>
                <Servicesbox/>
                <Servicesbox/>
            </Stack>
          
        </Box>
        </>
    )
}

export default Services;
