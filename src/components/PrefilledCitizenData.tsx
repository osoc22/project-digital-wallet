import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";


export default function NestedList({
  fields,
}: {
  fields: Array<{ icon: JSX.Element; name: string; description: string }>;
}) {
  return (
    <List
      sx={{ width: "100%", bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <List component="div" disablePadding>
        {fields.map((field, index) => (
          <ListItemButton key={index} sx={{ pl: 4 }}>
            <ListItemIcon>{field.icon}</ListItemIcon>
            <ListItemText primary={`${field.name} (${field.description})`} />
          </ListItemButton>
        ))}
      </List>
    </List>
  );
}
