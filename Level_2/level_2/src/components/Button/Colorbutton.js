import { Button,useTheme} from "@mui/material";
import { colorbuttoncss } from "../../Theme/colorbuttonstyle";
const Colorbutton = (props) => {
  const theme = useTheme();
  const styles = colorbuttoncss(theme);
  return (
    <Button
      variant="contained"
      fullWidth={props.fullWidth}
      sx={{...styles, ...props.sx}}
    >
      {props.txt}
    </Button>
  );
};
export default Colorbutton;