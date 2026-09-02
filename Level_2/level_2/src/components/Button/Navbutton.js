import {Button} from "@mui/material"
const Navbutton=(props)=>{
    return(
        <Button
            variant="outlined"
            sx={{
            color: "white",
            fontSize: "16px",
            minWidth: "38px",
            fontWeight: "400",
            textTransform: "none",
            padding: "5px 12px",
            borderRadius: "8px",
            ...props.sx,
            }}
            >
                {props.txt}
        </Button>
    )
}
export default Navbutton;