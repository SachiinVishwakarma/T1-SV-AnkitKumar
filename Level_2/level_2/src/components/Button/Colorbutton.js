import { Button } from "@mui/material";
const Colorbutton = (props) => {
  return (
    <Button
      variant="contained"
      sx={(theme)=>({
        backgroundColor: "secondary.main",
        color: "text.secondary",
        fontSize: theme.typography.fontSize,
        minWidth: theme.button.minWidth,
        fontWeight: theme.typography.fontWeightRegular,
        textTransform: "none",
        padding: theme.button.padding,
        borderRadius: theme.button.borderRadius,
        "&:hover": {
          backgroundColor: "secondary.dark",
        },
      })}
    >
      {props.txt}
    </Button>
  );
};
export default Colorbutton;