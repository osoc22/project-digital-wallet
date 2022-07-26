import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

export default function NestedList({
  title, fields,
}: {
  title: string;
  fields: Array<{ icon: JSX.Element; name: string; description: string }>;
}) {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <List
      sx={{ width: "100%", bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClick}>
        <ListItemText primary={title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {fields.map((field, index) => (
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon key={index}>
                {field.icon}
              </ListItemIcon>
              <ListItemText primary={`${field.name} (${field.description})`} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </List>
  );
}
