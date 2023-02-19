import React, { useState } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import CustomTypography from "./CustomTypography";
import { Grid } from "@mui/material";
import WorkExperienceTabs from "./WorkExperienceTabs";

const WorkExperience = () => {
  return (
    <Box sx={{ width: "100%" }} id="experience">
      <Divider textAlign="left">
        <CustomTypography variant="h4" fontWeight={700}>
          {" "}
          <span style={{ color: "#00b894" }}>02.</span>&nbsp;Work experience
        </CustomTypography>
      </Divider>
      <Grid container direction="row" spacing={2}>
        <Grid item xs={12} md={12}>
          <WorkExperienceTabs />
        </Grid>
      </Grid>
    </Box>
  );
};

export default WorkExperience;
