import { TextField,Typography,useTheme } from "@mui/material";
import { Inputstyle } from "../../Theme/Inputstyle";
const Input=(props)=>{
  const theme = useTheme();
  const styles = Inputstyle(theme);
  return(
    <>
    <Typography
        sx={styles.label}
    >
      {props.label}
    </Typography>

    <TextField
      fullWidth
      size="small"
      placeholder={props.placeholder}
      sx={styles.input}
    />
    </>
)}
export default Input;