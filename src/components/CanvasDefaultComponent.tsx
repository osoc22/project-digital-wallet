import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { ListItemButton, ListItemText, Collapse, ListItemIcon } from "@mui/material";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import { useState } from "react";

export default function SimpleAccordion({
  title,
  fields
}: {
  title: string;
  fields: Array<{ icon: JSX.Element; name: string; description: string }>;
}) {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List component="div" disablePadding>
      <Box sx={{ m: 1, border: "2px solid #d5d5d5" }}>
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
                <ListItemButton key={index} sx={{ pl: 4 }}>
                  <ListItemIcon>{field.icon}</ListItemIcon>
                  <ListItemText primary={`${field.name} (${field.description})`} />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </List>
      </Box>
    </List>
  );
}
