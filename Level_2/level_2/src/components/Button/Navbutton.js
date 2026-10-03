import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { navbuttoncss } from "../../Theme/navbuttonstyle";
const Navbutton = (props) => {
  const navigate = useNavigate();
  const Click = () => {
    if (props.txt === "Home") {
      navigate("/");
    }
    else if (props.txt === "Login") {
      navigate("/login");
    }
    else{
      navigate("/");
    }
  };

  return (
    <Button
      variant="outlined"
      sx={navbuttoncss}
      onClick={Click}
    >
      {props.txt}
    </Button>
  );
};
export default Navbutton;