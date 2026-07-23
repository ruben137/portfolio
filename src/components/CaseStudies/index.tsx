import React from "react";
import {
  Box,
  Chip,
  Divider,
  Grid,
  IconButton,
  Stack,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Launch } from "@mui/icons-material";
import CustomTypography from "../CustomTypography";
import "./styles.css";

type CaseStudy = {
  title: string;
  company: string;
  image: string;
  description: string;
  contribution: string;
  technologies: string[];
  link?: string;
};

const caseStudies: CaseStudy[] = [
  {
    title: "Event Discovery & Loyalty Experience",
    company: "LineUp",
    image: "/projects-caps/lineup.jpg",
    description:
      "A modern event discovery experience where users can browse live events and access exclusive benefits such as presales, discounts, 2-for-1 promotions, reward points, and last-minute tickets.",
    contribution:
      "Built responsive product interfaces and integrated APIs for users, points, rewards, events, and benefits, with a strong focus on usability, performance, and reusable React patterns.",
    technologies: ["React", "TypeScript", "REST APIs", "Responsive UI"],
    link: "https://lineup.com.mx",
  },
  {
    title: "Inspection & Audit Platform",
    company: "Dr. Simi · ConnecTIC",
    image: "/projects-caps/dr-simi.jpg",
    description:
      "A pharmacy inspection and audit platform that helps inspectors perform evaluations, generate reports, track compliance, and monitor corrective actions.",
    contribution:
      "Designed responsive interfaces, dynamic reporting modules, reusable components, and REST API integrations to streamline inspection workflows and improve operational efficiency.",
    technologies: ["React", "TypeScript", "Ant Design", "REST APIs"],
  },
  {
    title: "Mining Workforce Management Platform",
    company: "Mining Industry · ConnecTIC",
    image: "/projects-caps/gateway-minero.jpg",
    description:
      "An enterprise platform for workforce attendance, access control, and operational monitoring in the mining industry.",
    contribution:
      "Implemented dashboards, real-time monitoring, reporting modules, data visualizations, and administrative tools while integrating multiple APIs and building scalable frontend components.",
    technologies: ["Next.js", "TypeScript", "Recharts", "Real-time data"],
  },
  {
    title: "Get Ready Training Platform",
    company: "IDEMIA · ConnecTIC",
    image: "/projects-caps/idemia.jpg",
    description:
      "A centralized course management platform covering training requests, approvals, provider search, alternatives, confirmations, execution tracking, surveys, budgets, and Excel reports.",
    contribution:
      "Built multi-step workflows, role-based interfaces, reporting tools, and reusable components for a complex training operation with multiple stakeholders.",
    technologies: ["Next.js", "React", "TypeScript", "Ant Design", "Tailwind CSS"],
  },
];

const CaseStudies = () => {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box sx={{ width: "100%" }} id="case-studies">
      <Divider textAlign="left">
        <CustomTypography variant="h4" fontWeight={700}>
          <span style={{ color: "#00b894" }}>03.</span>&nbsp;Selected case studies
        </CustomTypography>
      </Divider>

      <Stack spacing={{ xs: 10, md: 14 }} sx={{ mt: 7 }}>
        {caseStudies.map((study, index) => {
          const imageFirst = !desktop || index % 2 === 0;
          const image = (
            <Grid item xs={12} md={7}>
              <Box className="case-study-image-wrap">
                <img
                  className="case-study-image"
                  src={study.image}
                  alt={`${study.title} interface`}
                  loading="lazy"
                />
              </Box>
            </Grid>
          );
          const content = (
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: index % 2 && desktop ? "flex-start" : "flex-start",
                }}
              >
                <CustomTypography sx={{ color: "#00b894", mb: 0.5 }}>
                  {study.company}
                </CustomTypography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <CustomTypography variant="h5" fontWeight={700}>
                    {study.title}
                  </CustomTypography>
                  {study.link && (
                    <Tooltip title="Visit project">
                      <IconButton
                        component="a"
                        href={study.link}
                        target="_blank"
                        rel="noreferrer"
                        size="small"
                        aria-label={`Visit ${study.title}`}
                      >
                        <Launch fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  )}
                </Box>
                <CustomTypography sx={{ color: "secondary.main", mt: 2 }}>
                  {study.description}
                </CustomTypography>
                <CustomTypography sx={{ color: "secondary.main", mt: 2 }}>
                  <strong>My contribution:</strong> {study.contribution}
                </CustomTypography>
                <Stack direction="row" useFlexGap flexWrap="wrap" gap={1} sx={{ mt: 3 }}>
                  {study.technologies.map((technology) => (
                    <Chip
                      key={technology}
                      label={technology}
                      size="small"
                      variant="outlined"
                      color="primary"
                    />
                  ))}
                </Stack>
              </Box>
            </Grid>
          );

          return (
            <Grid container spacing={{ xs: 3, md: 5 }} key={study.title}>
              {imageFirst ? image : content}
              {imageFirst ? content : image}
            </Grid>
          );
        })}
      </Stack>
    </Box>
  );
};

export default CaseStudies;
