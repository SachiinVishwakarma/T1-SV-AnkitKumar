export const Sidebarstyle=(theme)=>({
  sidebar:{
    width:"21%",
    height:"100vh",
    backgroundColor:theme.palette.background.default,
    borderRight:`1px solid ${theme.palette.secondary.main}`,
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
    boxSizing:"border-box",
    padding: "24px 16px",
    position: "sticky",
    top: 0,
    alignSelf: "flex-start",
    overflowY: "auto",
  },
  profile:{
    mb:"20px"
  },
  profilepic:{
    width:50,
    height:50,
    borderRadius:theme.borders.midborderradius,
    backgroundColor:theme.palette.primary.main,
    color:theme.palette.text.secondary,
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
  },
  username:{
    fontSize:theme.typography.fontSize,
    fontWeight:theme.typography.fontWeightBold
  },
  email:{
    fontSize:theme.typography.xs
  },
  heading:{
    fontSize:theme.typography.fontSize,
    fontWeight:theme.typography.fontWeightMedium
  },
  active:{
    padding:'5px',
    paddingLeft:2,
    border:`1px solid ${theme.palette.secondary.main}`,
    boxShadow:`-4px 0px ${theme.palette.secondary.main}`,
    borderRadius:theme.borders.smallborderradius,
    backgroundColor:theme.palette.background.sec
  },
  item:{
    fontSize:theme.typography.fontSize,
    fontWeight:theme.typography.fontWeightRegular,
    paddingLeft:2
  },
  quickItem:{
    fontSize:theme.typography.fontSize,
    fontWeight:theme.typography.fontWeightRegular,
    paddingLeft:2,
    display:"block",
    marginTop:1
  },

  sidebarLink: {
        textDecoration: "none",
        color: "inherit",
        display: "block",
    },

  dashboard:{
    display:"flex",
    minHeight:"100vh"
  },

  main:{
    width:"79%",
    minWidth:0,
    backgroundColor:theme.palette.background.sec
  },

  header:{
    height:70,
    minHeight:70,
    position:"sticky",
    top:0,
    zIndex:10,
    backgroundColor:theme.palette.primary.main,
    color:theme.palette.text.secondary,
    display:"flex",
    alignItems:"center",
    paddingLeft:2,
    paddingRight:2,
  },

  heading1:{
    fontSize:theme.typography.fontSize,
    fontWeight:theme.typography.fontWeightBold
  },
});