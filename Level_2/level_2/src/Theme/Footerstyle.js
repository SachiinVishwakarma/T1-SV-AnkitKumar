export const Footerstyle = (theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    mt: "100px",
  },
  toolbar: {
    minHeight: "166px",
    justifyContent: "space-between",
  },
  text: {
    color: theme.palette.text.secondary,
    mt: "20px",
  },
  buttons: {
    direction: "row",
    spacing: 1,
  },
});