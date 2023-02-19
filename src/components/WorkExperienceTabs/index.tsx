import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CustomTypography from "../CustomTypography";
import { Collapse, Link, List, ListItem, ListItemText } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import { ArrowRight } from "@mui/icons-material";
import ProjectListItem from "./ProjectListItem";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
interface WorkExperienceType {
  link: {
    href: string;
    label: string;
  };
  role: string;
  workedFromTo: string;
  items: string[];
  projects: {
    name: string;
    link: string;
    technologies: string[];
  }[];
}
const atik: WorkExperienceType = {
  link: {
    href: "https://atiksoluciones.com",
    label: "Atik Soluciones dev",
  },
  role: "Front-end programmer",
  workedFromTo: "June 2021 - January 2022",
  items: [
    "Wrote modern and maintainable code in ReactJs",
    "Worked with the MERN stack to develop an isomorphic app",
    "Develop custom components using Material UI",
    "Solved present bugs in the app",
    "Learned to communicate with a multi-disciplinary team to develop a successful project",
  ],
  projects: [
    {
      name: "CloudPOS",
      link: "https://www.cloudpos.gt",
      technologies: ["React", "JavaScript", "HTML", "CSS", "Material UI"],
    },
  ],
};
const connectic: WorkExperienceType = {
  link: {
    href: "https://www.connectic.cl",
    label: "ConnecTIC",
  },
  role: "Front-end programmer",
  workedFromTo: "January 2022 - present",
  items: [
    "Write modern and maintable code in ReactJs.",
    "Added new languages  and translations to the website using i18next.",
    "Added price conversions with currency API.",
    "Added maps and client locations using maps external APIs and geolocation API.",
    "Developed frequently asked questions page.",
    // "Redesigned the whole website following a mockup created by a designer.",
    // "Created functionality to obtain and purchase logistic rates.",
    "Developed a small chatbot and added real-time chatting with a support agent",
    "Developed admin panel",
    "Added authentication to website",
    "Added charts to visualize statistics",
    "Integrated tables exportation to excel using XLSX package",
  ],
  projects: [
    {
      name: "Delpagroup",
      link: "https://delpagroup.com",
      technologies: [
        "React",
        "TypeScript",
        "Material UI",
        "Mapbox",
        "Geolocation API",
        "Socket.IO",
        "Open exchange rates API",
        "i18next",
      ],
    },
    {
      name: "4recy",
      link: "https://www.4recy.com/",
      technologies: [
        "React",
        "TypeScript",
        "Ionic",
        "Google maps",
        "Geolocation API",
      ],
    },
    {
      name: "Civil registration",
      link: "",
      technologies: ["React", "TypeScript", "Ant design", "Recharts", "XLSX"],
    },
    {
      name: "Last mile delivery app",
      link: "",
      technologies: [
        "React",
        "TypeScript",
        "Nextjs",
        "Ant design",
        "Google maps",
        "React-joyride",
        "Libphonenumber-js",
        "html2canvas",
        "i18next",
      ],
    },
  ],
};
const workExperienceList: WorkExperienceType[] = [atik, connectic];
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ px: 3, py: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function WorkExperienceTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        // height: 224,
        marginTop: 10,
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        {workExperienceList.map((item, i) => {
          return (
            <Tab
              sx={{ textTransform: "none" }}
              label={item.link.label}
              {...a11yProps(0)}
            />
          );
        })}
      </Tabs>
      {workExperienceList.map((item, i) => (
        <TabPanel value={value} index={i}>
          <CustomTypography fontWeight={700} sx={{ fontSize: "1.1rem" }}>
            {item.role}{" "}
            <span
              style={{
                color: "#00b894",
                textDecoration: "none",
                transition: "all .3s ease",
              }}
            >
              @{" "}
            </span>
            <Link
              sx={{
                color: "#00b894",
                textDecoration: "none",
                transition: "all .3s ease",
              }}
              target="_blank"
              rel="noreferrer"
              href={item.link.href}
              className="link"
            >
              {item.link.label}
            </Link>
            {/* <a
            href="/"
            style={{
              fontWeight: 700,
              color: "#00b894",
              textDecoration: "none",
            }}
          ></a> */}
          </CustomTypography>
          <CustomTypography sx={{ color: "secondary.main" }}>
            {item.workedFromTo}
          </CustomTypography>
          <List dense>
            {item.items.map((item, i) => (
              <ListItem key={i}>
                <ListItemIcon sx={{ color: "#00b894" }}>
                  <ArrowRight />
                </ListItemIcon>
                <ListItemText primary={item} sx={{ color: "secondary.main" }} />
              </ListItem>
            ))}
          </List>
          <CustomTypography fontWeight={700} sx={{ fontSize: "1.1rem" }}>
            Projects
          </CustomTypography>
          <List dense>
            {item.projects.map((item, i) => (
              <ProjectListItem item={item} key={i} />
            ))}
          </List>
        </TabPanel>
      ))}
    </Box>
  );
}
