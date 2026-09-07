import { Button } from "@mui/material";
const Navbutton = (props) => {
  return (
    <Button
      variant="outlined"
      sx={(theme)=>({
        color: "text.secondary",
        borderColor: "secondary.main",
        fontSize: theme.typography.fontSize,
        minWidth: theme.button.minWidth,
        fontWeight: theme.typography.fontWeightRegular,
        textTransform: "none",
        padding: theme.button.padding,
        borderRadius: theme.button.borderRadius,
        ...props.sx,
      })}
    >
      {props.txt}
    </Button>
  );
};
export default Navbutton;