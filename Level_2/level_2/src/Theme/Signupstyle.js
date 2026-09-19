export const Signupstyle = (theme) => ({
  page: {
    minHeight: "100vh",
    backgroundColor: theme.palette.background.default,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  paper: {
    width: "615x",
    padding: "24px",
    borderRadius: theme.borders.largeborderradius,
    borderTop: `3px solid ${theme.palette.secondary.main}`,
    backgroundColor: "#FBFBFF",
  },

  row: {
    mt: "17px",
  },

  halfBox: {
    width: "50%",
  },

  terms: {
    fontSize: theme.typography.fontSize,
    mt: "12px",
  },

  signin: {
    color: theme.palette.secondary.main,
    cursor: "pointer",
  },
});