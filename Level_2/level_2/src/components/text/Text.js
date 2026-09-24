import { Typography } from "@mui/material";
const Text=(props)=>{
    return(
        <Typography
            sx={{
            fontSize: "16px",
            lineHeight: 1.5,
            color: "black",
            mb: 2,
            ...props.sx,
            }}
            >
            {props.txt}
        </Typography>
    )
}
export default Text;