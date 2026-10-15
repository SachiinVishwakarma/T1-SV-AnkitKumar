export const Helpstyle=(theme)=>({
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

  content:{
    padding:3
  },

  contenthead:{
    fontSize:theme.typography.fs,
    fontWeight:theme.typography.fontWeightBold,
    marginBottom:0,
  },

  contentsubhead:{
    fontSize:theme.typography.fontSize,
    fontWeight:theme.typography.fontWeightBold,
    marginBottom:2,
    marginTop:4.5,
  },

  paper:{
    padding:4,
    paddingLeft:5,
    border:`1px solid ${theme.palette.secondary.main}`,
    borderRadius:theme.borders.largeborderradius,
    boxShadow:`inset 0px 4px 4px ${theme.palette.secondary.main}`
  },

  card2:{
    width:'95%',
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
    marginTop:1
  },
  
}) 