import { FormControlLabel,Checkbox } from "@mui/material";

const Check=(props)=>{return(
    <FormControlLabel
      control={
        <Checkbox
          size="small"
          sx={(theme)=>({
            padding: "0px",
            mr: "2px",
            color: theme.palette.secondary.main,
            "&.Mui-checked": {
              color: theme.palette.secondary.main,
            },
          })}
        />
      }
      label={props.label}
      sx={(theme)=>({
        mt: "10px",
        "& .MuiFormControlLabel-label": {
          fontSize: theme.typography.fontSize,
        },
      })}
    />
)}
export default Check;