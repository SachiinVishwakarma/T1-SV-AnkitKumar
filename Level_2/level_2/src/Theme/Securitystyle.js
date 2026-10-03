export const Securitystyle=(theme)=>({
    dashboard:{
    display:"flex",
    minHeight:"100vh"
  },

  main:{
    width:"79%",
    backgroundColor:theme.palette.background.sec
  },

  header:{
    height:70,
    backgroundColor:theme.palette.primary.main,
    color:theme.palette.text.secondary,
    display:"flex",
    alignItems:"center",
    paddingLeft:2,
    paddingRight:2,
  },

  heading:{
    fontSize:theme.typography.fontSize,
    fontWeight:theme.typography.fontWeightBold
  },

  halfbox:{
    width:'50%',
  },

  content:{
    padding:3
  },

  contenthead:{
    fontSize:theme.typography.fs,
    fontWeight:theme.typography.fontWeightBold,
    mb:2.5,
  },

  contentsubhead:{
    fontSize:theme.typography.fontSize,
    fontWeight:theme.typography.fontWeightBold,
    mb:2,
  },

  text:{
    fontWeight:theme.typography.fontWeightRegular,
    mb: 4,
  },

  paper:{
    padding:4,
    paddingLeft:5,
    border:`1px solid ${theme.palette.secondary.main}`,
    borderRadius:theme.borders.largeborderradius,
    boxShadow:`inset 0px 4px 4px ${theme.palette.secondary.main}`
  },

  row:{
    mb: 2.5,
  },

  save:{
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingLeft: "30px",
    paddingRight: "30px",
  },

  cards:{
    mt:3
  },

  card:{
    flex:1,
    width:200,
    padding:2.5,
    border:`1px solid ${theme.palette.secondary.main}`,
    borderRadius:theme.borders.midborderradius,
    backgroundColor:theme.palette.background.sec
  },

  cardtitle:{
    fontSize:theme.typography.fontSize,
    fontWeight:theme.typography.fontWeightBold,
  },

  cardtext:{
    fontSize:theme.typography.xs,
    fontWeight:theme.typography.fontWeightRegular,
    display:"block",
    mt:1
  },

  bar:{
    height:6,
    backgroundColor:theme.palette.primary.main,
    borderRadius:theme.borders.midborderradius,
    mt:2
  },
})