import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import AboutMe from "./AboutMe";
import Banner from "./Banner";
import CustomDrawer from "./Drawer";
import Footer from "./Footer";
import SideProjects from "./SideProjects";
import WorkExperience from "./WorkExperience";
import ContactMe from './ContactMe/index';

const HomePage = () => {
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <>
      <CustomDrawer >
        <Banner />
        <Box sx={{ width: "100%", px: !matches ? 0 : 20 }}>
          <AboutMe />
        </Box>
        <Box sx={{ width: "100%", px: !matches ? 0 : 20, mt: 30 }}>
          <WorkExperience />
        </Box>
        <Box sx={{ width: "100%", px: !matches ? 0 : 20, mt: 30 }}>
          <SideProjects />
        </Box>
        <Box sx={{ width: "100%", px: !matches ? 0 : 20, mt: 30 }}>
          <ContactMe/>
        </Box>
        <Box sx={{ width: "100%", px: !matches ? 0 : 20, mt: 30 }}>
          <Footer />
        </Box>
      </CustomDrawer>
    </>
  );
};

export default HomePage;
