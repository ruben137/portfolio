import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { Grid, Button, Stack } from "@mui/material";
import { Download, LinkedIn, MailOutline } from "@mui/icons-material";
import CustomTypography from "../CustomTypography";

const ContactMe = () => {
  return (
    <Box sx={{ width: "100%" }} id="contact">
      <Divider textAlign="left">
        <CustomTypography fontWeight={700} variant="h4">
          {" "}
          <span style={{ color: "#00b894" }}>05.</span>&nbsp;Contact
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
            I’m open to remote senior front-end roles and selected freelance
            projects. Based in Venezuela (UTC−4), working with distributed
            teams across LATAM and beyond.
          </CustomTypography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} justifyContent="center" sx={{ mt: 5 }}>
            <Button
              component="a"
              href="mailto:ruben1dario1999@gmail.com"
              variant="contained"
              size="large"
              startIcon={<MailOutline />}
              sx={(theme) => ({
                textTransform: "none",
                bgcolor: theme.palette.mode === "light" ? "#007f6d" : "primary.main",
                color: theme.palette.mode === "light" ? "#fff" : "#071b18",
                "&:hover": {
                  bgcolor: theme.palette.mode === "light" ? "#00695a" : "#00a884",
                },
              })}
            >
              Email me
            </Button>
            <Button
              component="a"
              href="https://www.linkedin.com/in/rub%C3%A9n-gonz%C3%A1lez-495819167/"
              target="_blank"
              rel="noreferrer"
              variant="outlined"
              size="large"
              startIcon={<LinkedIn />}
              sx={{ textTransform: "none" }}
            >
              LinkedIn
            </Button>
          </Stack>
          <Stack direction="row" spacing={1} justifyContent="center" sx={{ mt: 2 }}>
            <Button
              component="a"
              href="/cvs/ruben-gonzalez-cv-en.pdf"
              target="_blank"
              size="small"
              startIcon={<Download />}
              sx={{ textTransform: "none" }}
            >
              CV in English
            </Button>
            <Button
              component="a"
              href="/cvs/ruben-gonzalez-cv-es.pdf"
              target="_blank"
              size="small"
              startIcon={<Download />}
              sx={{ textTransform: "none" }}
            >
              CV en español
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactMe;
