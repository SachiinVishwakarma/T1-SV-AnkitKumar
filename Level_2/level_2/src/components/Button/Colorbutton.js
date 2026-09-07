import { Button } from "@mui/material";
const Colorbutton = (props) => {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "secondary.main",
        color: "text.secondary",
        fontSize: "16px",
        minWidth: "38px",
        fontWeight: 400,
        textTransform: "none",
        padding: "5px 12px",
        borderRadius: "8px",
        "&:hover": {
          backgroundColor: "secondary.dark",
        },
      }}
    >
      {props.txt}
    </Button>
  );
};
export default Colorbutton;