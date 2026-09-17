import { TextField,Typography } from "@mui/material"
const Input=(props)=>{return(
    <>
    <Typography
        sx={(theme)=>({
        fontSize: theme.typography.fontSize,
        fontWeight: theme.typography.fontWeightBold,
        mb: "3px",
      })}
    >
      {props.label}
    </Typography>

    <TextField
      fullWidth
      size="small"
      placeholder={props.placeholder}
      sx={(theme)=>({
        "& .MuiInputBase-input": {
          fontSize: theme.typography.fontSize,
          padding: "9px",
        },
        "& .MuiOutlinedInput-root": {
          borderRadius: theme.borders.midborderradius,
          "& fieldset": {
            borderColor: theme.palette.secondary.main,
          },
        },
      })}
    />
    </>
)}
export default Input;