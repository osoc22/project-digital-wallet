import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";

import ContactsIcon from "@mui/icons-material/Contacts";
import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";
import BadgeIcon from "@mui/icons-material/Badge";

export default function NestedList() {
  return (
    <List
      sx={{ width: "100%", bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <List component="div" disablePadding>
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon>
            <ContactsIcon />
          </ListItemIcon>
          <ListItemText primary="Name (short text)" />
        </ListItemButton>
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon>
            <SwitchAccountIcon />
          </ListItemIcon>
          <ListItemText primary="Last Name (short text)" />
        </ListItemButton>
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon>
            <BadgeIcon />
          </ListItemIcon>
          <ListItemText primary="National registry number (short text)" />
        </ListItemButton>
      </List>
    </List>
  );
}
