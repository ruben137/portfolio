import React from "react";
import Box from "@mui/material/Box";
import CustomTypography from "../CustomTypography";
import { useMediaQuery } from "@mui/material";
import "./styles.css";
const Banner = () => {
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <Box
      sx={{
        height: "calc(100vh)",
        display: "flex",
        justifyContent: "center",
        width: "100%",
        alignItems: "center",
        // position: "static",
      }}
    >
      <Box sx={{ width: !matches ? "100%" : "max-content" }}>
        {" "}
        <CustomTypography
          variant="body1"
          fontWeight={700}
          sx={{ color: "#00b894" }}
        >
          My name is
        </CustomTypography>
        <CustomTypography
          variant="h2"
          fontWeight={700}
          sx={{ fontSize: !matches ? "60px" : "80px" }}
          className="animate-title"
        >
          Rubén González.
        </CustomTypography>
        <CustomTypography
          variant="h2"
          fontWeight={700}
          sx={{ color: "secondary.main", fontSize: !matches ? "60px" : "80px" }}
        >
          <span className="show">I</span> <span className="show">bring</span>{" "}
          <span className="show">ideas</span> <span className="show">to</span>{" "}
          <span className="show">reality.</span>
        </CustomTypography>
        <Box sx={{ width: !matches ? "100%" : "40%", mt: 2 }}>
          <CustomTypography
            variant="body1"
            fontWeight={700}
            sx={{ color: "secondary.main" }}
          >
            Front-end developer with +2 years of experience working with React,
            JavaScript, HTML and CSS focused in solving problems with good
            quality code.
          </CustomTypography>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
