import {Button} from "@mui/material";
const Colorbutton=(props)=>{
    return(
        <Button
            variant="contained"
            sx={{
                backgroundColor: "#35cfc2",
                color: "white",
                fontSize: "16px",
                minWidth: "38px",
                fontWeight: "400",
                textTransform: "none",
                padding: "5px 12px",
                borderRadius: "8px",

                "&:hover": {
                    backgroundColor: "#2bb9ae",
                },
            }}
            >{props.txt}
        </Button>
    )
}
export default Colorbutton;