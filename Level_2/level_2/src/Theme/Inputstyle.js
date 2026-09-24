export const Inputstyle = (theme) => ({
  label: {
    fontSize: theme.typography.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    mb: "6px",
  },

  input: {
    "& .MuiInputBase-input": {
      fontSize: theme.typography.fontSize,
      padding: "13px",
    },

    "& .MuiOutlinedInput-root": {
      borderRadius: theme.borders.midborderradius,
      backgroundColor: theme.palette.background.sec,

      "& fieldset": {
        borderColor: theme.palette.secondary.main,
      },
    },
  },
});