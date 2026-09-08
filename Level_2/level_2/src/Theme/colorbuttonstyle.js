export const colorbuttoncss=(theme)=>({
        backgroundColor: "secondary.main",
        color: "text.secondary",
        fontSize: theme.typography.fontSize,
        minWidth: theme.button.minWidth,
        fontWeight: theme.typography.fontWeightRegular,
        textTransform: "none",
        padding: theme.button.padding,
        borderRadius: theme.button.borderRadius,
        "&:hover": {
          backgroundColor: "secondary.dark",
        },
      });