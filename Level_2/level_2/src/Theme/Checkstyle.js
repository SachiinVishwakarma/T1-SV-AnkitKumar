export const Checkstyle = (theme) => ({
  checkbox: {
    padding: "0px",
    marginRight: "2px",
    color: theme.palette.secondary.main,

    "&.Mui-checked": {
      color: theme.palette.secondary.main,
    },
  },

  label: {
    marginTop: "0px",
    marginBottom: "20px",
    marginLeft: "2px",

    "& .MuiFormControlLabel-label": {
      fontSize: theme.typography.fontSize,
    },
  },
});