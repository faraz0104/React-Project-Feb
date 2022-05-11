import React from 'react'
import { Container, List, makeStyles, Typography } from '@material-ui/core';
import { Bookmark, ExitToApp, Home, ListAlt, Person, PhotoCamera, PlayCircleFilledOutlined, Settings, Storefront, TabletMac } from '@material-ui/icons';


const useStyles=makeStyles((theme=>({
  container:{
    height:"100vh",
    color:"white",
    paddingTop:"10px", 
    backgroundColor:theme.palette.primary.main,
    [theme.breakpoints.up("sm")]:{
      backgroundColor:"white",
      color:"#555",
      border:"1px solid #ece7e7",
      position:"fixed",
      top:10,
     
    },
  },
  

  icon:{
    marginRight:theme.spacing(1),
    [theme.breakpoints.up("sm")]:{
      fontSize:"18px",
    },
  },
  item:{
    display:"flex",
    alignItems:"center",
    marginBottom:theme.spacing(4),
    [theme.breakpoints.up("sm")]:{
      marginBottom:theme.spacing(3),
    }
  },
  text:{
    fontWeight:500,
[theme.breakpoints.down("sm")]:{
  display:"none",
}
  },
})))
function Leftbar() {
    const classes=useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <Home className={classes.icon}/>
        <Typography className={classes.text}>Homepage</Typography>
      </div>
      <div className={classes.item}>
        <Person className={classes.icon}/>
        <Typography className={classes.text}>Friends</Typography>
      </div>
      <div className={classes.item}>
        <ListAlt className={classes.icon}/>
        <Typography className={classes.text}>List</Typography>
      </div>
      <div className={classes.item}>
        <PhotoCamera className={classes.icon}/>
        <Typography className={classes.text}>Camera</Typography>
      </div>
      <div className={classes.item}>
        <PlayCircleFilledOutlined className={classes.icon}/>
        <Typography className={classes.text}>Videos</Typography>
      </div>
      <div className={classes.item}>
        <TabletMac className={classes.icon}/>
        <Typography className={classes.text}>App</Typography>
      </div>
      <div className={classes.item}>
        <Bookmark className={classes.icon}/>
        <Typography className={classes.text}>BookMark</Typography>
      </div>
      <div className={classes.item}>
        <Storefront className={classes.icon}/>
        <Typography className={classes.text}>Story</Typography>
      </div>
      <div className={classes.item}>
        <Settings className={classes.icon}/>
        <Typography className={classes.text}>Setting</Typography>
      </div>
      <div className={classes.item}>
        <ExitToApp className={classes.icon}/>
        <Typography className={classes.text}>Exit</Typography>
      </div>
    </Container>
  )
}

export default Leftbar