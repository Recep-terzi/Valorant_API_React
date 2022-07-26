import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Navbar.Module.css'
const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1}}>
    <AppBar position="static" sx={{bgcolor:"#FF4655"}}>
      <Toolbar>
        
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          VALORANT API
        </Typography>
        <a color="inherit" href="/agents" className='agents'>Agents</a>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar