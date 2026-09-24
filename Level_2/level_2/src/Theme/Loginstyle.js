export const Loginstyle = (theme) => ({
  page: {
    minHeight: "100vh",
    backgroundColor: "#eef3f8",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },

  card: {
    width: "100%",
    maxWidth: "510px",
    padding: "34px 36px",
    borderRadius: theme.borders.largeborderradius,
    borderTop: `3px solid ${theme.palette.secondary.main}`,
    backgroundColor: "#ffffff",
    boxSizing: "border-box",
  },

  subheading: {
    justifyContent: "flex-start",
    mb: "4px",
  },

  text: {
    mb: "25px",
  },

  input: {
    mb: "25px",
  },

  helpText: {
    fontSize: theme.typography.xs,
    mb: "25px",
    mt: "-15px",
  },

  options: {
    justifyContent: "space-between",
    alignItems: "center",
    mb: "20px",
  },

  forgot: {
    fontSize: theme.typography.xs,
    color: theme.palette.secondary.main,
    cursor: "pointer",
  },

  button: {
    padding: "10px",
    mb: "15px",
  },

  signupText: {
    fontSize: theme.typography.xs,
    mt: "18px",
    mb: "0px",
  },

  signup: {
    color: theme.palette.secondary.main,
    cursor: "pointer",
  },
});