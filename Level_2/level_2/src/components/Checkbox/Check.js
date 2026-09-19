import { FormControlLabel,Checkbox,useTheme} from "@mui/material";
import { Checkstyle } from "../../Theme/Checkstyle";

const Check=(props)=>{
  const theme = useTheme();
  const styles = Checkstyle(theme);
  return(
    <FormControlLabel
      control={
        <Checkbox
          size="small"
          sx={styles.checkbox}
        />
      }
      label={props.label}
      sx={styles.label}
    />
)}
export default Check;