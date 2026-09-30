export const Dashboardstyle=(theme)=>({
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

  text:{
    fontWeight:theme.typography.fontWeightRegular
  },

  content:{
    padding:3
  },

  paper:{
    padding:4,
    paddingLeft:5,
    border:`1px solid ${theme.palette.secondary.main}`,
    borderRadius:theme.borders.largeborderradius,
    boxShadow:`inset 0px 4px 4px ${theme.palette.secondary.main}`
  },

  welcome:{
    fontSize:theme.typography.fs,
    fontWeight:theme.typography.fontWeightBold,
    mb:1
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
    fontWeight:theme.typography.fontWeightMedium
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

  quicktitle:{
    display:"block",
    fontSize:theme.typography.fontSize,
    fontWeight:theme.typography.fontWeightBold,
    mt:5,
    mb:2
  },

  action:{
    flex:1,
    padding:2.5,
    textAlign:"center",
    border:`1px solid ${theme.palette.secondary.main}`,
    borderRadius:theme.borders.midborderradius,
    backgroundColor:theme.palette.background.sec
  },

  actiontitle:{
    fontSize:theme.typography.fontSize,
    fontWeight:theme.typography.fontWeightMedium
  },

  actiontext:{
    fontSize:theme.typography.xs,
    fontWeight:theme.typography.fontWeightRegular,
    display:"block",
    mt:1
  }
});