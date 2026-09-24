export const Signupstyle = (theme) => ({
  page: {
    minHeight: "100vh",
    backgroundColor: theme.palette.background.sec,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  paper: {
    width: "100%",
    maxWidth: "510px",
    padding: "20px",
    borderRadius: theme.borders.largeborderradius,
    borderTop: `3px solid ${theme.palette.secondary.main}`,
    backgroundColor: theme.palette.background.default,
  },

  row: {
    mt: "25px",
  },

  nameRow: {
  mt: "8px",
  },

  halfBox: {
    width: "50%",
  },

  terms: {
    fontSize: theme.typography.fontSize,
    mt: "18px",
  },

  signin: {
    color: theme.palette.secondary.main,
    cursor: "pointer",
  },

  email: {
  mt: "25px",
  },

  passwordText: {
  mt: "10px",
  mb: "15px",
  },

  smallText: {
    fontSize: theme.typography.xs,
    lineHeight: "1.2",
    mb: "0px",
  },

  check: {
  mt: "20px",
  mb: "25px",
  },

  subheading: {
  justifyContent: "flex-start",
  mb: "4px",
  },

  button: {
  width: "100%",
  padding: "10px",
  mt: "0px",
  mb: "10px",
  },
});