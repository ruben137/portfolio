import React, { useState } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import CustomTypography from "./CustomTypography";
import { Grid, useTheme } from "@mui/material";

const AboutMe = () => {
  const [greyScale, setGreyScale] = useState(true);
  const theme = useTheme();

  return (
    <Box sx={{ width: "100%" }}>
      <Divider textAlign="left">
        <CustomTypography fontWeight={700} variant="h4" id="about">
          {" "}
          <span style={{ color: "#00b894" }}>01.</span>&nbsp;About me
        </CustomTypography>
      </Divider>
      <Grid container direction="row" spacing={2}>
        <Grid item xs={12} md={6}>
          <CustomTypography sx={{ color: "secondary.main" }}>
            <br />
            <br />
            Hi, I’m Rubén González, a Senior Front-End Developer with 5+ years
            of experience building scalable, business-oriented web applications.
            <br />
            <br />
            I specialize in React, Next.js and TypeScript, and I’ve worked on
            complex platforms such as dashboards, admin systems, data
            visualization tools and multi-role applications for industries like
            logistics, mining, energy and fintech.
            <br />
            <br />
            I’ve collaborated with distributed teams and startups across LATAM,
            both as a full-time developer and as a freelance contractor,
            delivering clean, maintainable and user-focused solutions.
            <br />
            <br />
            I’m especially interested in solving real-world problems through
            well-designed interfaces, clear workflows and performant frontend
            architectures, and I’m always looking to contribute to products with
            real impact.
          </CustomTypography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ width: "100%", height: "400px", position: "relative" }}>
            {" "}
            {/* <div style={{position:"absolute",height:"100%",width:"100%",background:"rgba(0,0,0,0.5)"}}/> */}
            <Box
              sx={{
                width: "100%",
                height: "100%",
                border: "2px solid #0c2461",
                position: "absolute",
                zIndex: 0,
                top: !greyScale ? 5 : 0,
                left: !greyScale ? 5 : 0,
                transition: "all .3s ease",
              }}
            ></Box>
            <img
              alt="Rubén González"
              src="/img/yo-png.png"
              style={{
                width: "100%",
                objectFit: "scale-down",
                height: "100%",
                filter:
                  greyScale && theme.palette.mode === "dark"
                    ? "grayscale(100%)"
                    : undefined,
                transition: "all .3s ease",
                position: "absolute",
                zIndex: 2,
                background:
                  theme.palette.mode === "light" ? "#eeeeee" : "#212121",
                top: !greyScale ? -5 : 0,
                left: !greyScale ? -5 : 0,
              }}
              onMouseEnter={() => setGreyScale(false)}
              onMouseLeave={() => setGreyScale(true)}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutMe;
