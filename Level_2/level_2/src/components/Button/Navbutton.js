import { Button } from "@mui/material";
import { navbuttoncss } from "../../Theme/navbuttonstyle";
const Navbutton = (props) => {
  return (
    <Button
      variant="outlined"
      sx={navbuttoncss}
    >
      {props.txt}
    </Button>
  );
};
export default Navbutton;