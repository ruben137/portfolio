import { Box } from '@mui/material'
import React from 'react'
import CustomTypography from './CustomTypography'

const Footer = () => {
  return (
    <footer>
      <Box sx={{ height: "2.8rem" }}>
        <CustomTypography sx={{ color: "secondary.main" }} textAlign={"center"}>
          Designed and developed by Rubén González
        </CustomTypography>
      </Box>
    </footer>
  );
}

export default Footer