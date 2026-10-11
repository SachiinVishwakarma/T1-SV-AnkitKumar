export const Loginstyle = (theme) => ({
  page: {
    minHeight: "100vh",
    backgroundColor: theme.palette.background.sec,
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
    backgroundColor: theme.palette.background.default,
    boxSizing: "border-box",
  },

  subheading: {
    justifyContent: "flex-start",
    marginBottom: "4px",
  },

  text: {
    marginBottom: "25px",
  },

  input: {
    marginBottom: "25px",
  },

  helpText: {
    fontSize: theme.typography.xs,
    marginBottom: "25px",
    marginTop: "-15px",
  },

  options: {
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },

  forgot: {
    fontSize: theme.typography.xs,
    color: theme.palette.secondary.main,
    cursor: "pointer",
  },

  signupText: {
    fontSize: theme.typography.xs,
    marginTop: "18px",
    marginBottom: "0px",
  },

  signup: {
    color: theme.palette.secondary.main,
    cursor: "pointer",
  },
});