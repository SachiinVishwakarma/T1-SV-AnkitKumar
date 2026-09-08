import { Button } from "@mui/material";
import { colorbuttoncss } from "./colorbuttoncss";
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