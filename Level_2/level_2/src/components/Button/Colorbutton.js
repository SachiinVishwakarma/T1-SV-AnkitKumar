import { Button,useTheme} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { colorbuttoncss } from "../../Theme/colorbuttonstyle";
const Colorbutton = (props) => {
  const theme = useTheme();
  const styles = colorbuttoncss(theme);
  const navigate = useNavigate();
  const Click = () => {
    if(props.txt === "Signup"){
      navigate("/signup");
    }
  };
  return (
    <Button
      variant="contained"
      fullWidth={props.fullWidth}
      sx={{...styles, ...props.sx}}
      onClick={Click}
    >
      {props.txt}
    </Button>
  );
};
export default Colorbutton;