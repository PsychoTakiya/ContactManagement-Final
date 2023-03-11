import React from 'react'
import { AppBar,Typography, Toolbar } from '@mui/material'

export default function Header() {
  return (
    <div style={{margin:"30px"}}>
        <AppBar position="fixed" color="primary">
          <Toolbar style={{justifyContent:"center"}}>
            <Typography  variant="h4">
              Contact Management
            </Typography>
          </Toolbar>
        </AppBar>
    </div>
  )
}
