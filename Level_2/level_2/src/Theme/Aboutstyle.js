export const Aboutstyle = (theme) => ({
  about: {
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    maxWidth: "738px",
    display: "flex",
    justifySelf: "center",
    marginBottom: 4,
    marginTop: 2,
  },
  infoStack: {
    width: "738px",
    height: "60px",
    mx: "auto",
    marginBottom: 1,
  },
  infoBox: {
    backgroundColor: "background.default",
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: theme.borders.smallborderradius,
    padding: "0px 12px",
  },
  infoText: {
    maxWidth: "738px",
    display: "flex",
    justifySelf: "center",
    marginTop: 2,
  },
});