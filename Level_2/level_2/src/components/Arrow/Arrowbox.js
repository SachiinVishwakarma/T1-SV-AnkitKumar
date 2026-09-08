import {Box} from "@mui/material"
import { Arrowboxstyle } from "../../Theme/Arrowboxstyle";
const Arrowbox=({children})=>{
    return(
        <Box sx={Arrowboxstyle}>
            {children}
        </Box>
    )
}
export default Arrowbox;