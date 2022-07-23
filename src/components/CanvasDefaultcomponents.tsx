import * as React from "react";

import Box from "@mui/material/Box";
import DefaultComponentsContactDetails from "./DefaultComponentsContactDetails";
import DefaultComponentsDateAndLocation from "./DefaultComponentsDateAndLocation";

import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

export default function SimpleAccordion() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <List
      sx={{ width: "100%", maxWidth: 360 }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          {/* Nested List Items */}
        </ListSubheader>
      }
    >
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="Default Components" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Box sx={{ m: 1, border: "2px solid #d5d5d5" }}>
            <DefaultComponentsContactDetails />
          </Box>
          <Box sx={{ m: 1, border: "2px solid #d5d5d5" }}>
            <DefaultComponentsDateAndLocation />
          </Box>
        </List>
      </Collapse>
    </List>
  );
}
