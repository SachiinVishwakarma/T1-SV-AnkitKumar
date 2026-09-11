export const Servicesstyle = (theme) => ({
  services: {
    display: "flex",
    flexDirection: "column",
    justifySelf: "center",
  },
  stack: {
    mb: "10px",
  },
  box: {
    height: "163px",
    width: "400px",
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: "30px",
    backgroundColor: "background.default",
  },
  cardContent: {
    padding: "14px !important",
  },
  heading: {
    fontSize: theme.typography.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    color: "text.primary",
    mb: 0.8,
    textAlign: "center",
  },
});