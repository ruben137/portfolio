import {
  ArrowRight,
  ExpandLess,
  ExpandMore,
  StarBorder,
} from "@mui/icons-material";
import {
  ListItem,
  ListItemIcon,
  Link,
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  IconButton,
  Tooltip,
} from "@mui/material";
import React, { useState } from "react";
import CustomTypography from "../CustomTypography";
interface Props {
  item: {
    name: string;
    link: string;
    technologies: string[];
  };
}
const ProjectListItem = ({ item }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <ListItem sx={{ color: "secondary.main" }}>
        <ListItemIcon sx={{ color: "#00b894" }}>
          <ArrowRight />
        </ListItemIcon>

        <ListItemText
          // sx={{ color: "#00b894" }}
          primary={
            item.link ? (
              <Link
                sx={{
                  color: "#00b894",
                  textDecoration: "none",
                  transition: "all .3s ease",
                  fontWeight: 700,
                }}
                target="_blank"
                rel="noreferrer"
                href={item.link}
                className="link"
              >
                {item.name}
              </Link>
            ) : (
              <Tooltip title={"Not available yet"} placement="right">
                <span style={{ cursor: "not-allowed", fontWeight: 700 }}>
                  {item.name}
                </span>
              </Tooltip>
            )
          }
        />

        <IconButton onClick={() => setOpen(!open)}>
          {open ? <ExpandLess /> : <ExpandMore />}
        </IconButton>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <CustomTypography fontWeight={700} sx={{ pl: 4 }}>
          Technologies
        </CustomTypography>
        <List component="div" disablePadding dense>
          {item.technologies.map((item, i) => (
            <ListItem sx={{ pl: 4 }} key={i}>
              <ListItemIcon sx={{ color: "#00b894" }}>
                <ArrowRight />
              </ListItemIcon>
              <ListItemText primary={item} sx={{ color: "secondary.main" }} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </React.Fragment>
  );
};

export default ProjectListItem;
