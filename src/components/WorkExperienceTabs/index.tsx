import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import CustomTypography from "../CustomTypography";
import { Link, List, ListItem, ListItemText } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import { ArrowRight } from "@mui/icons-material";
import ProjectListItem from "./ProjectListItem";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export type ProjectType = {
  name: string;
  link?: string; // ahora opcional
  description?: string; // NUEVO: texto corto de qué es
  technologies: string[];
};

export type WorkExperienceType = {
  company: string;
  link: {
    href: string;
    label: string;
  };
  role: string;
  workedFromTo: string;
  items: string[];
  projects: ProjectType[];
};

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{ width: "100%" }}
    >
      {value === index && <Box sx={{ px: 3, py: 1 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

/** =========================
 *  DATA (edita aquí tus proyectos)
 *  ========================= */
const workExperienceList: WorkExperienceType[] = [
  {
    company: "LineUp",
    link: {
      href: "",
      label: "LineUp",
    },
    role: "Front-end Developer (Freelance)",
    workedFromTo: "2024 - Present",
    items: [
      "Frontend development for a fintech loyalty program (points & rewards).",
      "API integrations for users, points, rewards, and event catalog.",
      "Focus on UX, performance and maintainable React patterns.",
      "Worked asynchronously with a remote team in Mexico.",
    ],
    projects: [
      {
        name: "LineUp Loyalty Platform",
        link: "https://lineup.com.mx",
        description:
          "Loyalty platform where users earn points via credit card purchases and redeem them for concert/event tickets.",
        technologies: [
          "React",
          "TypeScript",
          "REST APIs",
          "UI Components",
          "State management",
        ],
      },
    ],
  },
  {
    company: "Connectic",
    link: {
      href: "https://www.connectic.cl",
      label: "ConnecTIC",
    },
    role: "Front-end Developer",
    workedFromTo: "January 2022 - Present",
    items: [
      "Built modern and maintainable apps using React/Next.js + TypeScript.",
      "Developed dashboards, reports and role-based admin flows.",
      "Integrated charts and Excel exports (XLSX).",
      "Worked with maps and geolocation for real-world location use cases.",
      "Implemented i18n with i18next and multi-language support.",
    ],
    projects: [
      {
        name: "Mining Productivity Platform",
        link: "",
        description:
          "Platform to monitor worker time and productivity using gateways + assigned cards (RFID). Includes dashboards, reports, and interactive maps.",
        technologies: [
          "React",
          "Next.js",
          "TypeScript",
          "Ant Design",
          "Recharts",
          "XLSX",
          "Google Maps / Mapbox",
        ],
      },
      {
        name: "Corporate Training Platform (Courses & Passport)",
        link: "",
        description:
          "Multi-role platform: users register/complete courses, upload certificates, and admins validate through a staged workflow with budgets and approvals. Includes a training passport.",
        technologies: [
          "React",
          "Next.js",
          "TypeScript",
          "Ant Design",
          "Role-based access",
          "Workflows",
        ],
      },
      {
        name: "Green Hydrogen Chile",
        link: "",
        description:
          "Self-managed platform to register projects and providers in the sustainable energy ecosystem.",
        technologies: ["React", "Next.js", "TypeScript", "Ant Design"],
      },
      {
        name: "Delpagroup",
        link: "https://delpagroup.com",
        description:
          "Logistics platform to quote maritime, land and air shipments.",
        technologies: [
          "React",
          "TypeScript",
          "Material UI",
          "Mapbox",
          "Geolocation API",
          "Socket.IO",
          "Open Exchange Rates API",
          "i18next",
        ],
      },
      {
        name: "4recy",
        link: "https://www.4recy.com/",
        description:
          "Mobile/web app for recycling points and geolocation-based map experience.",
        technologies: [
          "React",
          "TypeScript",
          "Ionic",
          "Google Maps",
          "Geolocation API",
        ],
      },
      {
        name: "Civil Registration System",
        link: "",
        description:
          "Administrative system to automate civil processes and management flows.",
        technologies: ["React", "TypeScript", "Ant Design", "Recharts", "XLSX"],
      },
    ],
  },
  {
    company: "Atik Soluciones Digitales SAC",
    link: {
      href: "https://atiksoluciones.com",
      label: "Atik Soluciones",
    },
    role: "Front-end Developer",
    workedFromTo: "June 2021 - January 2022",
    items: [
      "Built modern and maintainable UI with React.",
      "Implemented screens from Figma and integrated REST APIs.",
      "Developed reusable UI components using Material UI.",
      "Fixed bugs and delivered improvements iteratively.",
    ],
    projects: [
      {
        name: "CloudPOS",
        link: "https://www.cloudpos.gt",
        description: "Sales / POS platform with admin screens and core flows.",
        technologies: ["React", "JavaScript", "HTML", "CSS", "Material UI"],
      },
    ],
  },
];

export default function WorkExperienceTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        marginTop: 10,
        width: "100%",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Work experience tabs"
        sx={{ borderRight: 1, borderColor: "divider", minWidth: 220 }}
      >
        {workExperienceList.map((item, i) => (
          <Tab
            key={`${item.company}-${i}`}
            sx={{ textTransform: "none", alignItems: "flex-start" }}
            label={item.link.label}
            {...a11yProps(i)}
          />
        ))}
      </Tabs>

      {workExperienceList.map((item, i) => (
        <TabPanel key={`${item.company}-panel-${i}`} value={value} index={i}>
          <CustomTypography fontWeight={700} sx={{ fontSize: "1.1rem" }}>
            {item.role}{" "}
            <span style={{ color: "#00b894" }}>
              {item.link?.label ? "@ " : ""}
            </span>
            {item.link?.href ? (
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
            ) : (
              <span style={{ color: "#00b894" }}>{item.link.label}</span>
            )}
          </CustomTypography>

          <CustomTypography sx={{ color: "secondary.main", mb: 1 }}>
            {item.workedFromTo}
          </CustomTypography>

          <List dense>
            {item.items.map((text, idx) => (
              <ListItem key={idx}>
                <ListItemIcon sx={{ color: "#00b894", minWidth: 32 }}>
                  <ArrowRight />
                </ListItemIcon>
                <ListItemText primary={text} sx={{ color: "secondary.main" }} />
              </ListItem>
            ))}
          </List>

          <CustomTypography fontWeight={700} sx={{ fontSize: "1.1rem", mt: 1 }}>
            Projects
          </CustomTypography>

          <List dense>
            {item.projects.map((p, idx) => (
              <ProjectListItem item={p as any} key={idx} />
            ))}
          </List>
        </TabPanel>
      ))}
    </Box>
  );
}
