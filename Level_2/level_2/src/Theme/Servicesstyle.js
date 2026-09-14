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
    borderRadius: theme.borders.largeborderradius,
    backgroundColor: theme.palette.background.default,
  },
  cardContent: {
    padding: "14px",
  },
  heading: {
    fontSize: theme.typography.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.text.primary,
    mb: 0.8,
    textAlign: "center",
  },
});