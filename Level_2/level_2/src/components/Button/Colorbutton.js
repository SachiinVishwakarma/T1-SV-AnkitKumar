import { Button } from "@mui/material";
import { colorbuttoncss } from "../../Theme/colorbuttonstyle";
const Colorbutton = (props) => {
  return (
    <Button
      variant="contained"
      sx={colorbuttoncss}
    >
      {props.txt}
    </Button>
  );
};
export default Colorbutton;