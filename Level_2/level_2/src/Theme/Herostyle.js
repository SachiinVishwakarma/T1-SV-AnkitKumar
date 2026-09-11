export const Herostyle = (theme) => ({

  grid: {
    mb: 5,
    mt: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  heading: {
    fontSize: "36px",
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 1.15,
    color: "text.primary",
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
    borderRadius: "30px",
    boxShadow: `0px -4px 4px 0px ${theme.palette.primary.main}`,
    backgroundColor: "background.default",
  },

  cardContent: {
    padding: "22px !important",
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
    fontSize: "24px",
    fontWeight: theme.typography.fontWeightBold,
    color: "text.primary",
    mb: 0.8,
  },

  cardDescription: {
    maxWidth: "390px",
  },

  dots: {
    justifyContent: "center",
  },

  activeDot: {
    backgroundColor: "secondary.main",
  },

  navbtn: {
    color: "text.primary",
  },

});