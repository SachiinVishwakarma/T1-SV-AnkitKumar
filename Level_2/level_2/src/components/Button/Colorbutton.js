import { Button,useTheme} from "@mui/material";
import { colorbuttoncss } from "../../Theme/colorbuttonstyle";
const Colorbutton = (props) => {
  const theme = useTheme();
  const styles = colorbuttoncss(theme);
  return (
    <Button
      variant="contained"
      type={props.type || "button"}
      fullWidth={props.fullWidth}
      sx={{...styles.button,...styles[props.size || "medium"], ...props.sx}}
      onClick={props.onclick}
    >
      {props.txt}
    </Button>
  );
};
export default Colorbutton;