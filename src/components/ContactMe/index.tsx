import React, { useState } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Grid, Button } from "@mui/material";
import CustomTypography from "../CustomTypography";

const ContactMe = () => {
  return (
    <Box sx={{ width: "100%" }} id="contact">
      <Divider textAlign="left">
        <CustomTypography fontWeight={700} variant="h4">
          {" "}
          <span style={{ color: "#00b894" }}>04.</span>&nbsp;Contact
        </CustomTypography>
      </Divider>
      <br />
      <br />
      <br />
      <Grid container direction="row" justifyContent={"center"}>
        <Grid item xs={12} md={5}>
          <CustomTypography variant="h3" fontWeight={700} textAlign="center">
            Contact me
          </CustomTypography>
          <CustomTypography
            textAlign={"center"}
            sx={{ color: "secondary.main", mt: 1 }}
          >
            I'm always looking for new challenges, if you are interested in my
            work click here to contact me.
          </CustomTypography>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
            <a href="mailto:ruben1dario1999@gmail.com" style={{textDecoration:"none"}}>
              {" "}
              <Button
                variant="outlined"
                color="primary"
                size="large"
                sx={{ textTransform: "none" }}
              >
                Email me
              </Button>
            </a>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactMe;
