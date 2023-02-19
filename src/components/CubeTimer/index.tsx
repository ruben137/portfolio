import { Box } from '@mui/material'
import React from 'react'

const CubeTimer = () => {
  return (
    <Box sx={{ bgcolor: "#2a2a2a" ,"&:hover":{
      transform:"scale(1.01)",
      transition:"all .3s ease"
    }}}>
      <img
        src="/img/speed-timer.png"
        alt="speed-timer"
        style={{ width: "100%", height: "100%" }}
      />
    </Box>
  );
}

export default CubeTimer