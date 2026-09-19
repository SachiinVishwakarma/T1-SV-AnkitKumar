export const Inputstyle = (theme) => ({
  label: {
    fontSize: theme.typography.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    mb: "3px",
  },

  input: {
    "& .MuiInputBase-input": {
      fontSize: theme.typography.fontSize,
      padding: "9px",
    },

    "& .MuiOutlinedInput-root": {
      borderRadius: theme.borders.midborderradius,

      "& fieldset": {
        borderColor: theme.palette.secondary.main,
      },
    },
  },
});