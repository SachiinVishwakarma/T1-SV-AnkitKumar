export const Herostyle = (theme) => ({

  grid: {
    mb: 5,
    mt: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  heading: {
    fontSize: theme.typography.fontsizelarge,
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 1.15,
    color: theme.palette.text.primary,
    mt: 10,
    mb: 2,
  },

  description: {
    maxWidth: "390px",
  },

  buttonStack: {
    mt: 3,
  },

  card: {
    border: `1px solid ${theme.palette.secondary.dark}`,
    borderRadius: theme.borders.largeborderradius,
    boxShadow: `0px -4px 4px 0px ${theme.palette.primary.main}`,
    backgroundColor: theme.palette.background.default,
  },

  cardContent: {
    padding: "22px",
  },

  cardBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "384px",
    width: "650px",
  },

  arrowImage: {
    width: "12px",
    height: "24px",
  },

  cardHeading: {
    fontSize: theme.typography.fontsizemid,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.text.primary,
    mb: 0.8,
  },

  cardDescription: {
    maxWidth: "390px",
  },

  dots: {
    justifyContent: "center",
  },

  activeDot: {
    backgroundColor: theme.palette.secondary.main,
  },

  navbtn: {
    color: theme.palette.text.primary,
  },

});