export const colorbuttoncss=(theme)=>({
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.text.secondary,
        fontSize: theme.typography.fontSize,
        minWidth: theme.button.minWidth,
        fontWeight: theme.typography.fontWeightRegular,
        textTransform: "none",
        padding: theme.button.padding,
        borderRadius: theme.button.borderRadius,
        "&:hover": {
          backgroundColor: theme.palette.secondary.dark,
        },
      });