import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';

export default function NestedList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          {/* Nested List Items */}
        </ListSubheader>
      }
    >
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="Contact Details" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <BusinessOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Basic information (long paragraph)" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <LocalAtmOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Profit date (number)" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <ContactPageOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Owner data (short text" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
