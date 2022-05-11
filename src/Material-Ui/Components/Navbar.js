import React, { useState } from 'react'
import{alpha, AppBar, Avatar, Badge, InputBase, makeStyle, makeStyles, Toolbar, Typography} from "@material-ui/core"
import { Mail, Notifications, Search } from '@material-ui/icons';
 
const useStyles=makeStyles((theme)=>({
    toolbar:{
        display:"flex",
        justifyContent:"space-between",
    },
    search:{
             display:"flex",
             alignItems:"center",
             backgroundColor:alpha(theme.palette.common.white,0.15),
             '&:hover':{
                backgroundColor:alpha(theme.palette.common.white,0.25),
             },
             borderRadius:theme.shape.borderRadius,
             width:"50%",
             [theme.breakpoints.down("sm")]:{
                display:(props)=>props.open ? "flex ": "none",
            },
    },
    
    logoLg:{
        display: "none",
        [theme.breakpoints.up("sm")]:{
            display:"block",
        },
    },
    logoSm:{
        display:"block",
        [theme.breakpoints.up("sm")]:{
            display:"none",
        },
    },
    input:{
        color:"white",
        marginLeft:"10px",
    },
    icons:{
       alignItems:"center",
         display:(props)=>props.open ? "none ": "flex",
         [theme.breakpoints.down("sm")]:{
          position:"sticky",
          top:0,
        }, 
    },
    badge:{
        marginRight: "15px",
    },
    searchButton:{
        marginRight:"15px",
        [theme.breakpoints.up("sm")]:{
            display:(props)=>props.open ? "flex ": "none",
        },
    }

    
}))

function Navbar() {
    const[open,setOpen]=useState(false)
    const classes=useStyles({open});
  return (
 <AppBar position="fixed">
     <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
          Faraz khan
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          Faraz
        </Typography>
        <div className={classes.search}>
            <Search />
            <InputBase placeholder="Search" className={classes.input}/>
        </div>
     <div className={classes.icons}>
         <Search className={classes.searchButton} onClick={()=>setOpen(true)} />
     <Badge badgeContent={100} color="secondary" className={classes.badge}>
  <Mail />
   </Badge>
   <Badge badgeContent={5} color="secondary"className={classes.badge}>
<Notifications/>
   </Badge>
   
     </div>
     </Toolbar>
     </AppBar>
  )
}

export default Navbar