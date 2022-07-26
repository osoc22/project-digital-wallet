import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountTreeIcon from "@mui/icons-material/AccountTree";

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab
          icon={<DashboardIcon />}
          iconPosition="start"
          label="Component Library"
        />
        <Tab
          icon={<AccountTreeIcon />}
          iconPosition="start"
          label="Procedures"
        />
      </Tabs>
    </Box>
  );
  }
