import React from "react";
import Box from "@mui/material/Box";
import CustomTypography from "../CustomTypography";
import { Button, Stack, useMediaQuery } from "@mui/material";
import { Download, LinkedIn } from "@mui/icons-material";
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
            Senior Front-End Developer with 5+ years of experience building
            scalable, business-oriented products with React, Next.js and
            TypeScript.
          </CustomTypography>
        </Box>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ mt: 4, width: "fit-content" }}>
          <Button
            variant="contained"
            href="#case-studies"
            sx={(theme) => ({
              textTransform: "none",
              fontWeight: 700,
              bgcolor: theme.palette.mode === "light" ? "#007f6d" : "primary.main",
              color: theme.palette.mode === "light" ? "#fff" : "#071b18",
              "&:hover": {
                bgcolor: theme.palette.mode === "light" ? "#00695a" : "#00a884",
              },
            })}
          >
            View my work
          </Button>
          <Button
            variant="outlined"
            href="/cvs/ruben-gonzalez-cv-en.pdf"
            target="_blank"
            startIcon={<Download />}
            sx={{ textTransform: "none", fontWeight: 700 }}
          >
            Download résumé
          </Button>
          <Button
            variant="text"
            href="https://www.linkedin.com/in/rub%C3%A9n-gonz%C3%A1lez-495819167/"
            target="_blank"
            rel="noreferrer"
            startIcon={<LinkedIn />}
            sx={{ textTransform: "none", fontWeight: 700 }}
          >
            LinkedIn
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Banner;
