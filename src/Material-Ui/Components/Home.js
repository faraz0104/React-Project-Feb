import React from 'react'
import {Button, Grid, makeStyles} from "@material-ui/core"
import {Person, PersonAdd}  from "@material-ui/icons"
import Navbar from './Navbar'
import Leftbar from './Leftbar'
import Feed from "./Feed"
import Rightbar from "./Rightbar"
import Add from './Add'


const useStyles=makeStyles((theme)=>({
right:{
  [theme.breakpoints.down("sm")]:{
    display:"none"
  },
}
}))

function Home() {
  const classes=useStyles();
  return (
    <div>
       <Navbar />
       <Grid container>
         <Grid item sm={2} xs={2}>
           <Leftbar />
         </Grid>
         <Grid item sm={7} xs={10}>
           <Feed />
           </Grid>
         <Grid item sm={3} className={classes.right}>
           <Rightbar/>
         </Grid>
       </Grid>
       <Add/>
    </div>
  )
}

export default Home