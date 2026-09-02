import { Typography } from "@mui/material";
const Subheading=(props)=>{
    return(
        <Typography
            sx={{
              fontSize: "32px",
              fontWeight: 700,
              color: "#202b33",
              mb: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            {props.txt}
        </Typography>
    );
}
export default Subheading;