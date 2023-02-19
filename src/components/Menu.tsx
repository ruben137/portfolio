import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  DarkMode,
  LightMode,
  Settings,
  SettingsOutlined,
} from "@mui/icons-material";
import { ThemeContext } from "@emotion/react";
import {
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import useDarkMode from "../hooks/useDarkMode";

export default function CustomMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { darkMode, toggleDarkMode } = useDarkMode();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <SettingsOutlined sx={{ color: "primary.main" }} />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <ListItem>
          <ListItemIcon>
            {darkMode ? (
              <LightMode sx={{ color: "#F2CB05" }} />
            ) : (
              <DarkMode sx={{ color: "#012340" }} />
            )}
          </ListItemIcon>
          <ListItemText primary={darkMode ? "Light mode" : "Dark mode"} />
          <Switch
            size="small"
            checked={darkMode}
            onChange={(e) => toggleDarkMode(e.target.checked)}
          />
        </ListItem>
      </Menu>
    </>
  );
}
