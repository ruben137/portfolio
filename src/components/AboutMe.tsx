import React, { useState } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import CustomTypography from "./CustomTypography";
import { Grid, useTheme } from "@mui/material";

const AboutMe = () => {
  const [greyScale, setGreyScale] = useState(true);
  const theme = useTheme();
  console.log("theme", theme);
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
            Hi, my name is Rubén González, and I like to build web apps using
            technologies such as ReactJs.
            <br />
            <br />
            In 2020 I discovered my passion for coding and started to practice
            on a daily basis building web pages by myself.
            <br />
            <br />
            When I felt ready to apply for a job, I started to search on the web
            for one, and a company from Perú hired me as a freelancer, I guess
            that was lucky, but at the same time, I was ready to deal with this
            new challenge.
            <br />
            <br />
            Until now, I have been able to participate in more than four
            different projects as a freelancer developer, and I am always
            looking forward to improve my skills and contribute to new projects.
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
                border: "2px solid #ce0120",
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
