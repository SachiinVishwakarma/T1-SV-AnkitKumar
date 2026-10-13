export const colorbuttoncss=(theme)=>({
      button: {
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
      },
      small: {
        padding: theme.button.padding,
        minWidth: theme.button.minWidth,
        fontSize: theme.typography.fontSize,
        fontWeight: theme.typography.fontWeightRegular,
        borderRadius: theme.button.borderRadius,
      },
      medium: {
        paddingTop: "10px",
        paddingBottom: "10px",
        paddingLeft: "30px",
        paddingRight: "30px",
      },
      large: {
        width: "100%",
        padding: "10px",
        marginTop: "10px",
        marginBottom: "15px",
        fontWeight: theme.typography.fontWeightBold,
      },
    });