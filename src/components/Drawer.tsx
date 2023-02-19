import React, { useEffect, useState } from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CustomTypography from "./CustomTypography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { Button, Switch, Tooltip } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";
import CustomMenu from "./Menu";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
const navItems = [
  { title: "About", href: "#about" },
  { title: "Experience", href: "#experience" },
  { title: "Side projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
  { title: "Options", href: "#options", render: () => <CustomMenu /> },
];
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
interface Props {
  children: any;
  window?: () => Window;
}
function HideOnScroll(props: Props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
export default function CustomDrawer({ children }: Props) {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <HideOnScroll>
        <AppBar
          position="fixed"
          open={false}
          sx={{
            background: "transparent",
            backdropFilter: "blur(5px)",
            boxShadow: 0,
          }}
        >
          <Toolbar>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <a href="/" style={{ textDecoration: "none" }}>
                {" "}
                <Box
                  sx={{
                    width: "35px",
                    height: "35px",
                    border: "2px solid rgb(0, 172, 193)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "3px",
                    cursor: "pointer",
                    "&:hover": {
                      bgcolor: "rgba(0, 172, 193, 0.1)",
                    },
                  }}
                  className="scale-up"
                >
                  {" "}
                  <CustomTypography
                    sx={{ color: "rgb(0, 172, 193)" }}
                    fontWeight={700}
                  >
                    RG
                  </CustomTypography>
                </Box>
              </a>
              <Box>
                {navItems.map((item, i) =>
                  item.render ? (
                    item.render()
                  ) : (
                    <a href={item.href} style={{ textDecoration: "none" }}>
                      <Button
                        key={i}
                        sx={{
                          color: "secondary.main",
                          textTransform: "none",
                          fontWeight: 700,
                          fontFamily: "lato",
                        }}
                      >
                        <span style={{ color: "#00b894" }}>
                          0{i + 1}.&nbsp;
                        </span>
                        {item.title}
                      </Button>
                    </a>
                  )
                )}
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Drawer
        variant="permanent"
        open={false}
        PaperProps={{
          sx: {
            bgcolor: "transparent",
            border: "none",
            display: "flex",
            justifyContent: "flex-end",
            flexDirection: "column",
            py: 5,
          },
        }}
      >
        <DrawerHeader></DrawerHeader>

        <List>
          {[
            {
              title: "GitHub",
              icon: <GitHub sx={{ color: "primary.main" }} />,
              href: "https://github.com/ruben137",
            },
          ].map((item, index) => (
            <ListItem key={index} disablePadding sx={{ display: "block" }}>
              <Tooltip title={item.title} placement="right">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  {" "}
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: "initial",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: "auto",
                        justifyContent: "center",
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.title} sx={{ opacity: 0 }} />
                  </ListItemButton>
                </a>
              </Tooltip>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* <DrawerHeader /> */}
        {children}
      </Box>
    </Box>
  );
}
