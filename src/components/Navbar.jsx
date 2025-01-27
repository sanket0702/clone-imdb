import React from 'react';
import { useState } from 'react';
import {AppBar,Box, Button, InputBase} from '@mui/material';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import MenuBox from './MenuBox';
///components

const logo =''
const Navbar = () => {
    const [open, setOpen] = useState(false);

    const OnClickHandle = (e) =>{
        setOpen(e.currentTarget);
    }
    const handleClose = () =>{
        setOpen(false);
    }

  return (
    <div>
      <AppBar sx={{background:'black',position:'relative'}}>
        <Toolbar sx={{display:'flex',justifyContent:'space-evenly',alignItems:'center'}} >
          <Box sx={{color:'green',fontWeight:'bold',display:'flex',alignItems:'center', }}>
          
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/863px-IMDB_Logo_2016.svg.png?20200406194337' alt="" style={{width:'80px'}} />
          
          </Box>
          <Box sx={{display:'flex' ,alignItems:'center',marginLeft:'20px',width:'100%', justifyContent:'space-around'}} >
            <Box sx={{color:'white',display:'flex',alignItems:'center'}}  onClick={OnClickHandle}><MenuIcon/>
            <Typography variant="h6" sx={{color:'white'}} >
              Menu
            </Typography></Box>
            <MenuBox open={open} handleClose={handleClose}/>

            <InputBase sx={{background:'white',width:'60%',borderRadius:'8px',height:'35px'}}/>
            <Typography variant="h6" color="initial"sx={{color:'white',fontWeight:'bold',display:'flex'}}>IMDb<Box components='span' sx={{color:'blue',fontWeight:'bold'}}>Pro</Box></Typography>
            <Box></Box>
            <Typography variant="h6" color="initial" sx={{color:'white',fontWeight:'bold'}}>Watchlist</Typography>

            <Button sx={{color:'white',fontWeight:'bold'}}>Sign In</Button>

          </Box>
        </Toolbar>
      </AppBar>

    </div>
  )
}

export default Navbar
