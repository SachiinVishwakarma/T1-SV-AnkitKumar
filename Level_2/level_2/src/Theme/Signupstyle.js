export const Signupstyle = (theme) => ({
  page: {
    minHeight: "100vh",
    backgroundColor: theme.palette.background.sec,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },

  paper: {
    maxWidth: "510px",
    padding: "34px 36px",
    borderRadius: theme.borders.largeborderradius,
    borderTop: `3px solid ${theme.palette.secondary.main}`,
    backgroundColor: theme.palette.background.default,
  },

  row: {
    marginTop: "10px",
  },

  nameRow: {
  marginTop: "8px",
  },

  halfBox: {
    width: "50%",
  },

  terms: {
    fontSize: theme.typography.xs,
    marginTop: "0px",
  },

  signin: {
    color: theme.palette.secondary.main,
    cursor: "pointer",
  },

  email: {
  marginTop: "10px",
  },

  passwordText: {
  marginTop: "10px",
  marginBottom: "10px",
  },

  smallText: {
    fontSize: theme.typography.xs,
    lineHeight: "1.2",
    marginBottom: "0px",
  },

  check: {
  marginTop: "20px",
  marginBottom: "10px",
  },

  subheading: {
  justifyContent: "flex-start",
  marginBottom: "4px",
  },
});