export const Checkstyle = (theme) => ({
  checkbox: {
    padding: "0px",
    mr: "2px",
    color: theme.palette.secondary.main,

    "&.Mui-checked": {
      color: theme.palette.secondary.main,
    },
  },

  label: {
    mt: "10px",

    "& .MuiFormControlLabel-label": {
      fontSize: theme.typography.fontSize,
    },
  },
});