

import React, { useState } from 'react'
import {  Button, Container, Fab, FormControlLabel, FormLabel, makeStyles, MenuItem, Modal, Radio, RadioGroup, TextField, Tooltip } from '@material-ui/core';
import { Add as AddIcon} from "@material-ui/icons"

 
const useStyles=makeStyles((theme=>({
      fab:{
          position: "fixed",
          bottom:20,
          right:20,
      },
      container:{
         width:500,
         height:550,
         backgroundColor:"white",
         position:"absolute",
         top:0,
         bottom:0,
         left:0,
         right:0,
         margin:"auto" ,
         [theme.breakpoints.down("sm")]:{
             width:"100vw",
             height:"100vh",
         },
      },
})))

function Add() {
    const[open,setOpen]=useState(false)
  const classes=useStyles();
  return <><Tooltip title="Add"aria-label='add'  onClick={()=>setOpen(true)}>
      <Fab color="primary" className={classes.fab}>
          <AddIcon />
      </Fab>
      </Tooltip>
      <Modal open={open}>
<Container className={classes.container}>
    <form className={classes.form} autoComplete="off" >
        <div className={classes.item}>
            <TextField id="standard-basic" label="Title" size="small" style={({width:"100%"})}/>
        </div>
        <div className={classes.item}>
        <TextField
             id="outlined-multiline-static"
          label="Description"
            multiline
            rows={4}
            
            defaultValue="Tell Your Story....."
            variant="outlined" size="small" style={({width:"100%"})} />
        </div>
        <div className={classes.item}>
            <TextField select label="Visibility" value="Public" >
                <MenuItem VALUE="Public">Public</MenuItem>
                <MenuItem VALUE="Private">Priate</MenuItem>
                <MenuItem VALUE="Unlisted">Unlisted</MenuItem>
            </TextField>
        </div>
        <div className={classes.item}>
            <FormLabel component="legend">Who Can comment</FormLabel>
            <RadioGroup >
                <FormControlLabel value="Everybody" control={<Radio />} label="Everybody" />
                <FormControlLabel value="My Friends" control={<Radio />} label="My Friends" />
                <FormControlLabel value="Nobody" control={<Radio />} label="Nobody" />
                <FormControlLabel value="Custom" control={<Radio />} label="Custom (Premium)" />
            </RadioGroup>
        </div>
        <div className={classes.item}>
            <Button variant="outlined" color="primary"  >Create</Button>
            <Button variant="outlined" color="secondary">Cancel</Button>
        </div>
    </form>
</Container>
      </Modal>
      </>
   
  
}

export default Add