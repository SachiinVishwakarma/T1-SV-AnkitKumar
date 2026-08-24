import {Box} from "@mui/material"
const Arrowbox=({children})=>{
    return(
        <Box
            sx={{
            width: "55px",
            height: "55px",
            borderRadius: "15px",
            backgroundColor: "#4ECDC4",
            color: "#FBFBFF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "16px",
            fontWeight: 700,
            }}
        >
            {children}
        </Box>
    )
}
export default Arrowbox;